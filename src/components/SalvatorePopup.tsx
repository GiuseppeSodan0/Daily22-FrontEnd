import React, {useState} from 'react';
import {motion, AnimatePresence} from 'motion/react';
import {MessageSquare, X, Send} from 'lucide-react';

export default function SalvatorePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{sender: 'user' | 'bot'; text: string}[]>([
    {sender: 'bot', text: 'Ciao, sono Salvatore! Come posso aiutarti con la sicurezza sul lavoro?'},
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages((prev) => [...prev, {sender: 'user', text: input}]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {sender: 'bot', text: 'Grazie per la tua domanda. La sicurezza sul lavoro è la nostra priorità. Per una consulenza personalizzata, contattaci.'},
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white shadow-[0_4px_25px_rgba(234,179,8,0.3)] hover:shadow-[0_4px_35px_rgba(234,179,8,0.5)] transition-all duration-300 flex items-center justify-center group ${isOpen ? 'hidden' : ''}`}
        aria-label="Apri chat Salvatore"
      >
        <MessageSquare className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse" />
      </button>

      {/* Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, y: 20, scale: 0.95}}
            animate={{opacity: 1, y: 0, scale: 1}}
            exit={{opacity: 0, y: 20, scale: 0.95}}
            transition={{duration: 0.2}}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden flex flex-col"
            style={{background: '#fefcf9', border: '1px solid rgba(0,0,0,0.08)', boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 4px 16px rgba(0,0,0,0.08)', maxHeight: '480px'}}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-yellow-500 text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold">SALVATORE</p>
                  <p className="text-[10px] text-white/80 font-mono">ChatBot IA</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/20 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[280px]">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-yellow-500 text-white rounded-br-md'
                        : 'rounded-bl-md'
                    }`}
                    style={msg.sender === 'bot' ? {background: '#f5f0e8', color: '#57534e'} : {}}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 flex items-center gap-2" style={{borderTop: '1px solid rgba(0,0,0,0.06)'}}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Scrivi un messaggio..."
                className="flex-1 px-4 py-2 rounded-full text-xs placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 transition-all"
                style={{background: '#f5f0e8', border: '1px solid rgba(0,0,0,0.06)', color: '#1c1917'}}
              />
              <button
                onClick={handleSend}
                className="p-2.5 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white transition-colors"
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
