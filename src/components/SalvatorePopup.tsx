import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {MessageSquare, X, Send} from 'lucide-react';
import {useLanguage} from '../context/LanguageContext';

export default function SalvatorePopup() {
  const {t, language} = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'user' | 'bot'; text: string}[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    setMessages([
      {sender: 'bot', text: t('salvatore.welcome')},
    ]);
  }, [language]);

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, {sender: 'user', text: input}]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {sender: 'bot', text: t('salvatore.reply')},
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#2C2C2E] hover:bg-[#F2C400] text-white shadow-[0_4px_25px_rgba(44,44,46,0.3)] transition-all duration-300 flex items-center justify-center group ${isOpen ? 'hidden' : ''}`}
        aria-label="Apri chat Salvatore"
      >
        <MessageSquare className="w-6 h-6 text-white group-hover:text-[#2C2C2E] transition-colors" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#F2C400] rounded-full border-2 border-[#F0EFEB] animate-pulse" />
      </button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, y: 20, scale: 0.95}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 20, scale: 0.95}}
            transition={{duration: 0.25, ease: 'easeOut'}}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden flex flex-col border border-[#F2C400]/25 shadow-[0_20px_50px_rgba(44,44,46,0.15)] bg-white"
            style={{maxHeight: '480px'}}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-[#2C2C2E] text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F2C400]/10 border border-[#F2C400]/20 flex items-center justify-center text-white">
                  <MessageSquare className="w-5 h-5 text-[#F2C400]" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold uppercase tracking-wider font-sans text-white">SALVATORE</p>
                  <p className="text-[10px] text-[#F2C400] font-mono">{t('salvatore.botSub')}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[220px] max-h-[300px] bg-[#F0EFEB]/20">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed font-mono ${
                      msg.sender === 'user'
                        ? 'bg-[#2C2C2E] text-white rounded-br-md border border-[#F2C400]/15'
                        : 'bg-white text-[#2C2C2E] rounded-bl-md border border-[#2C2C2E]/10'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 flex items-center gap-2 border-t border-[#2C2C2E]/10 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t('salvatore.inputPlaceholder')}
                className="flex-1 px-4 py-2 rounded-full text-xs placeholder-[#2C2C2E]/30 focus:outline-none focus:ring-1 focus:ring-[#F2C400] transition-all bg-[#F0EFEB]/60 text-[#2C2C2E] border border-[#2C2C2E]/10 font-mono"
              />
              <button
                onClick={handleSend}
                className="p-2.5 rounded-full bg-[#2C2C2E] hover:bg-[#F2C400] text-white hover:text-[#2C2C2E] transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
