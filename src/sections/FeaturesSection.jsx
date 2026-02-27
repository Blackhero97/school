import { motion } from 'framer-motion'
import { Shield, Users, Zap, Globe, Heart, Award, Star, BookOpen, Clock, ArrowRight } from 'lucide-react'
import './FeaturesSection.css'

export default function FeaturesSection() {
    const features = [
        { icon: Shield, title: "Xavfsiz Muhit", desc: "Maktab hududi 24/7 videokuzatuv va professional qo'riqlash xizmati nazoratida.", tag: "Xavfsizlik", color: "#10b981" },
        { icon: Users, title: "Kichik Guruhlar", desc: "Har bir sinfda maksimal 18-20 o'quvchi. Bu individual yondashuvni kafolatlaydi.", tag: "Ta'lim", color: "#3b82f6" },
        { icon: Globe, title: "Xalqaro Aloqalar", desc: "Britaniya va Koreya maktablari bilan hamkorlik, o'quv almashinuv dasturlari.", tag: "Xalqaro", color: "#8b5cf6" },
        { icon: Star, title: "Yuqori Reyting", desc: "O'zbekiston xususiy maktablari orasida TOP-3 o'rindan birini egallab kelmoqdamiz.", tag: "Yutuq", color: "#f59e0b" },
        { icon: BookOpen, title: "Chuqur Til O'rganish", desc: "Ingliz tili Cambridge darsliklari asosida chuqurlashtirilgan holda o'tiladi.", tag: "Tillar", color: "#3b82f6" },
        { icon: Award, title: "Malakali Ustozlar", desc: "O'qituvchilarimizning 80% dan ortig'i magistrlik yoki xalqaro sertifikatlarga ega.", tag: "Ustozlar", color: "#ef4444" },
        { icon: Zap, title: "IT va Robotexnika", desc: "Dasturlash darslari 1-sinfdan boshlanadi. Zamonaviy laboratoriya mavjud.", tag: "IT", color: "#06b6d4" },
        { icon: Clock, title: "Uzoq Ish Vaqti", desc: "Farzandingiz soat 18:00 gacha maktabda qo'shimcha to'garaklar bilan band bo'ladi.", tag: "Qulaylik", color: "#84cc16" },
        { icon: Heart, title: "Issiq Ovqat", desc: "Parhezshunoslar tomonidan tasdiqlangan kuniga 3 mahal sifatli va mazali taomlar.", tag: "Salomatlik", color: "#ec4899" },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }
        }
    }

    return (
        <section className="features-section">
            <div className="container">
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-tag">Nega Biz?</div>
                    <h2 className="section-title">Farzandingiz Kelajagi Uchun <span>Afzalliklar</span></h2>
                    <p className="section-subtitle">Biz nafaqat bilim beramiz, balki har tomonlama sog'lom va barkamol avlodni tarbiyalaymiz.</p>
                </motion.div>

                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className="feature-card"
                            variants={itemVariants}
                        >
                            <div className="feature-top">
                                <div className="feature-icon" style={{ background: `${f.color}12`, color: f.color }}>
                                    <f.icon size={22} />
                                </div>
                                <span className="feature-tag">{f.tag}</span>
                            </div>
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-desc">{f.desc}</p>
                            <button className="feature-more">
                                Batafsil →
                            </button>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
