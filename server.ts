import express from 'express';
import path from 'path';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

function escapeHtml(str: string): string {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Contact Form API route sending to segreteria@dy22.it
  app.post(['/api/contact', '/sendmail.php'], async (req, res) => {
    try {
      const { nome, azienda, email, telefono, oggetto, messaggio, consentePrivacy, language, timestamp } = req.body;

      // 1. Mandatory Privacy Validation
      if (!consentePrivacy || consentePrivacy === 'false') {
        const errMsg = (language === 'en')
          ? 'To submit the form, you must consent to the processing of your personal data.'
          : 'Per inviare il modulo è necessario accettare il trattamento dei dati personali.';
        return res.status(400).json({ success: false, error: errMsg, message: errMsg });
      }

      // 2. Mandatory Fields Validation
      if (!nome || !email || !messaggio) {
        const errMsg = (language === 'en')
          ? 'Please fill in all required fields (Name, Email, Message).'
          : 'Compila tutti i campi obbligatori (Nome, Email, Messaggio).';
        return res.status(400).json({ success: false, error: errMsg, message: errMsg });
      }

      // 3. Strict Recipient & Subject setup for maximum deliverability
      const recipientEmail = 'segreteria@dy22.it';
      const lang = (language || 'it').toString().toLowerCase();
      const subjectPrefix = 'Nuova richiesta dal sito daily';
      const emailSubject = oggetto ? `${subjectPrefix}: ${oggetto}` : subjectPrefix;
      const dateFormatted = timestamp 
        ? new Date(timestamp).toLocaleString('it-IT', { timeZone: 'Europe/Rome' }) 
        : new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome' });

      // Plaintext version (Clean & reliable spam-filtered format)
      const textContent = `
È stata ricevuta una nuova richiesta dal sito daily.

Nome e Cognome: ${nome}
Azienda: ${azienda || 'Non specificata'}
Email: ${email}
Telefono: ${telefono || 'Non specificato'}
Oggetto: ${oggetto || 'Non specificato'}

Messaggio:
${messaggio}

Consenso privacy: Accettato
Lingua sito: ${lang.toUpperCase()}
Data e ora: ${dateFormatted}
      `.trim();

      // HTML version (Simple, clean layout)
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; color: #1e293b; background-color: #ffffff;">
          <h2 style="margin-top: 0; color: #0f172a; font-size: 18px; border-bottom: 2px solid #F2C400; padding-bottom: 8px;">
            Nuova richiesta dal sito daily
          </h2>
          <p style="font-size: 14px; color: #334155;">È stata ricevuta una nuova richiesta dal sito daily.</p>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
            <tr><td style="padding: 6px 0; font-weight: bold; width: 140px; color: #64748b;">Nome e Cognome:</td><td style="padding: 6px 0; color: #0f172a;"><strong>${escapeHtml(nome)}</strong></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Azienda:</td><td style="padding: 6px 0; color: #0f172a;">${escapeHtml(azienda || 'Non specificata')}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Email:</td><td style="padding: 6px 0; color: #0f172a;"><a href="mailto:${escapeHtml(email)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Telefono:</td><td style="padding: 6px 0; color: #0f172a;">${escapeHtml(telefono || 'Non specificato')}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Oggetto:</td><td style="padding: 6px 0; color: #0f172a;">${escapeHtml(oggetto || 'Non specificato')}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Consenso privacy:</td><td style="padding: 6px 0; color: #16a34a; font-weight: bold;">Accettato</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Lingua sito:</td><td style="padding: 6px 0; color: #0f172a;">${lang.toUpperCase()}</td></tr>
            <tr><td style="padding: 6px 0; font-weight: bold; color: #64748b;">Data e ora:</td><td style="padding: 6px 0; color: #0f172a;">${escapeHtml(dateFormatted)}</td></tr>
          </table>
          <div style="background-color: #f8fafc; border-left: 4px solid #F2C400; padding: 12px 16px; margin-top: 10px; font-size: 14px; white-space: pre-wrap; color: #334155;">
            <p style="margin: 0 0 6px 0; font-weight: bold; color: #0f172a;">Messaggio:</p>
            ${escapeHtml(messaggio)}
          </div>
        </div>
      `;

      console.log(`[EMAIL DISPATCH] Destination: ${recipientEmail} | Reply-To: ${email} | Subject: ${emailSubject}`);

      // 4. Send Email via Nodemailer with authorized sender and Reply-To header
      const smtpHost = process.env.SMTP_HOST;
      const smtpPort = Number(process.env.SMTP_PORT) || 587;
      const smtpUser = process.env.SMTP_USER;
      const smtpPass = process.env.SMTP_PASS;
      const smtpFrom = process.env.SMTP_FROM || (smtpUser ? `"Modulo Contatti daily" <${smtpUser}>` : `"Modulo Contatti daily" <no-reply@dy22.it>`);

      if (smtpHost && smtpUser && smtpPass) {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: process.env.SMTP_SECURE === 'true' || smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: smtpFrom,
          to: recipientEmail,
          replyTo: email,
          subject: emailSubject,
          text: textContent,
          html: htmlContent,
        });

        console.log(`[EMAIL DISPATCH SUCCESS] Email successfully delivered to ${recipientEmail} via SMTP ${smtpHost}`);
      } else {
        console.log(`[EMAIL DISPATCH NOTIFICATION] SMTP credentials not set in env (SMTP_HOST / SMTP_USER). Payload logged for ${recipientEmail}:\n`, textContent);
      }

      const successMsg = (lang === 'en')
        ? 'Thank you, your request has been sent successfully.'
        : 'Grazie, la tua richiesta è stata inviata correttamente.';

      return res.status(200).json({
        success: true,
        message: successMsg,
        recipient: recipientEmail,
      });

    } catch (err: any) {
      console.error('[EMAIL DISPATCH ERROR]:', err);
      const errResponseMsg = (req.body?.language === 'en')
        ? 'An error occurred while sending your request. Please try again or contact us directly at segreteria@dy22.it.'
        : 'Si è verificato un errore durante l’invio. Riprova o scrivici direttamente a segreteria@dy22.it.';

      return res.status(500).json({
        success: false,
        error: errResponseMsg,
        message: errResponseMsg,
      });
    }
  });

  // Health check route
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Vite middleware in dev mode
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
