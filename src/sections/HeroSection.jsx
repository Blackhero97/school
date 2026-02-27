import { useState } from 'react'
import { ArrowRight, Play, Star, Shield, Users, Award } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import VideoModal from '../components/VideoModal'
import './HeroSection.css'

export default function HeroSection() {
    const [isVideoOpen, setIsVideoOpen] = useState(false)

    const fadeUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
    }

    // ... rest of the component
    return (
        <section className="hero">
            <div className="hero-bg"></div>

            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial="initial"
                    animate="animate"
                    variants={{
                        animate: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    <motion.div className="hero-badge" variants={fadeUp}>
                        <span className="badge-dot"></span>
                        Qabul-2026 davom etmoqda
                    </motion.div>

                    <motion.h1 className="hero-title" variants={fadeUp}>
                        Farzandingiz uchun <br />
                        <span className="hero-title-highlight">Mukammal Ta'lim</span>
                    </motion.h1>

                    <motion.p className="hero-desc" variants={fadeUp}>
                        BM Maktab — bu zamonaviy bilim berish maskani, bu yerda biz nafaqat o'qitamiz,
                        balki har bir o'quvchining shaxsiy salohiyatini kashf etamiz.
                    </motion.p>

                    <motion.div className="hero-actions" variants={fadeUp}>
                        <button className="btn btn-primary hero-btn-primary">
                            Hoziroq Ariza Berish
                        </button>
                        <button className="hero-video-btn" onClick={() => setIsVideoOpen(true)}>
                            <div className="play-icon">
                                <Play size={16} fill="currentColor" />
                            </div>
                            Maktab hayoti
                        </button>
                    </motion.div>

                    <motion.div className="hero-trust" variants={fadeUp}>
                        {/* ... existing trust section ... */}
                        <div className="trust-item">
                            <div className="trust-stars">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="#f59e0b" color="#f59e0b" />)}
                            </div>
                            <span>5.0 (200+ Fikrlar)</span>
                        </div>
                        <div className="trust-divider"></div>
                        <div className="trust-item">
                            <Award className="trust-icon" size={16} />
                            <span>Eng yaxshi reytng (#1)</span>
                        </div>
                    </motion.div>
                </motion.div>

                <div className="hero-visual">
                    <motion.div
                        className="hero-card-main"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
                    >
                        <div className="hero-image-wrapper">
                            <img src="/school.png" alt="BM Maktab binosi" className="hero-main-img" />
                        </div>

                        {/* Minimal floating badges */}
                        <motion.div
                            className="float-badge float-badge-1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <Users size={18} />
                            <div>
                                <strong>1200+</strong>
                                <span>O'quvchilar</span>
                            </div>
                        </motion.div>
                        <motion.div
                            className="float-badge float-badge-2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <Award size={18} />
                            <div>
                                <strong>60+</strong>
                                <span>Ustozlar</span>
                            </div>
                        </motion.div>
                        <motion.div
                            className="float-badge float-badge-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <Shield size={18} />
                            <div>
                                <strong>Xavfsiz</strong>
                                <span>24/7 Monitoring</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                className="hero-scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <ArrowRight size={18} style={{ transform: 'rotate(90deg)' }} />
            </motion.div>

            <VideoModal
                isOpen={isVideoOpen}
                onClose={() => setIsVideoOpen(false)}
                videoSrc="/video/IMG_2465.MOV"
            />
        </section>
    )
}
