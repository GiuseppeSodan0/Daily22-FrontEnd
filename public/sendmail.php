<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  exit(json_encode(['success' => false, 'message' => 'Method not allowed']));
}

$nome    = trim($_POST['nome'] ?? '');
$email   = trim($_POST['email'] ?? '');
$telefono = trim($_POST['telefono'] ?? '');
$oggetto  = trim($_POST['oggetto'] ?? '');
$messaggio = trim($_POST['messaggio'] ?? '');

if (!$nome || !$email || !$telefono || !$messaggio) {
  http_response_code(400);
  exit(json_encode(['success' => false, 'message' => 'Campi obbligatori mancanti']));
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  exit(json_encode(['success' => false, 'message' => 'Email non valida']));
}

$to = 'segreteria@dy22.it';
$subject = $oggetto ? "[Daily22] $oggetto" : '[Daily22] Nuova richiesta contatto da sito web';

$body = "Nome: $nome\n";
$body .= "Email: $email\n";
$body .= "Telefono: $telefono\n";
$body .= "Oggetto: $oggetto\n";
$body .= "\n--- Messaggio ---\n$messaggio\n";
$body .= "\n--- Fine messaggio ---\n";
$body .= "\nInviato dal form contatti Daily22";

$headers = "From: $to\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$sent = mail($to, $subject, $body, $headers, "-f $to");

if ($sent) {
  echo json_encode(['success' => true, 'message' => 'Email inviata con successo']);
} else {
  http_response_code(500);
  echo json_encode(['success' => false, 'message' => 'Errore nell\'invio della mail']);
}
