import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Phone, CheckCircle2 } from 'lucide-react';
import './ChatAgent.css';

const ChatAgent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState('welcome'); // welcome -> ask_name -> ask_phone -> success
    const [userData, setUserData] = useState({ name: '', phone: '' });
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, type: 'bot', text: 'Assalomu alaykum! BM MAKTABI chat-agentiga xush kelibsiz. 😊' },
        { id: 2, type: 'bot', text: 'Sizga qanday yordam bera olaman?' }
    ]);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 30000); // 30 seconds

        return () => clearTimeout(timer);
    }, []);

    const addMessage = (text, type) => {
        setMessages(prev => [...prev, { id: Date.now(), text, type }]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const currentInput = input.trim();
        addMessage(currentInput, 'user');
        setInput('');

        setTimeout(() => {
            if (step === 'welcome') {
                setStep('ask_name');
                addMessage('Siz bilan yaqinroq tanishsak bo‘ladimi? Ismingiz nima?', 'bot');
            } else if (step === 'ask_name') {
                setUserData(prev => ({ ...prev, name: currentInput }));
                setStep('ask_phone');
                addMessage(`Tanishganimdan xursandman, ${currentInput}! Siz bilan bog‘lanishimiz uchun telefon raqamingizni qoldira olasizmi?`, 'bot');
            } else if (step === 'ask_phone') {
                setUserData(prev => ({ ...prev, phone: currentInput }));
                setStep('success');
                addMessage('Rahmat! Ma’lumotlaringiz qabul qilindi. Tez orada mutaxassislarimiz siz bilan bog‘lanishadi. 🤝', 'bot');
            }
        }, 1000);
    };

    return (
        <div className="chat-agent-wrapper">
            {/* Floating Action Button */}
            <motion.button
                className={`chat-fab ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {isOpen ? (
                    <X size={24} />
                ) : (
                    <div className="fab-logo-wrapper">
                        <img src="/logo school.jpg" alt="Chat" />
                    </div>
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chat-window"
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: "spring", damping: 20, stiffness: 300 }}
                    >
                        {/* Header */}
                        <div className="chat-header">
                            <div className="agent-info">
                                <div className="agent-avatar">
                                    <img src="/logo school.jpg" alt="Agent" />
                                </div>
                                <h3>BM Agent</h3>
                            </div>
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="chat-messages">
                            {messages.map((msg) => (
                                <motion.div
                                    key={msg.id}
                                    className={`message-bubble ${msg.type}`}
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <div className="message-text">
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        {step !== 'success' ? (
                            <form className="chat-input-area" onSubmit={handleSubmit}>
                                <div className="input-wrapper">
                                    <input
                                        type="text"
                                        placeholder={
                                            step === 'welcome' ? 'Yozing...' :
                                                step === 'ask_name' ? 'Ismingiz...' :
                                                    'Telefon...'
                                        }
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="send-btn" disabled={!input.trim()}>
                                    <Send size={16} />
                                </button>
                            </form>
                        ) : (
                            <div className="success-footer">
                                <CheckCircle2 size={20} color="#000" />
                                <span>Yuborildi</span>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ChatAgent;
