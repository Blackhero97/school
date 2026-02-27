import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Clock, Users, BookOpen, Star } from 'lucide-react'
import './ProgramsSection.css'

export default function ProgramsSection() {
    const programs = [
        {
            title: "Boshlang'ich",
            level: "1-4 SINF",
            emoji: "📚",
            desc: "Kuchli poydevor va ijodiy fikrlashni rivojlantirish uchun maxsus darslar.",
            subjects: ["Matematika", "Ingliz tili", "IT"],
            meta: { time: "08:00–14:00", size: "Max 18" },
            color: "#3b82f6"
        },
        {
            title: "O'rta Ta'lim",
            level: "5-9 SINF",
            emoji: "🔬",
            desc: "Chuqurlashtirilgan ilmiy yo'nalishlar va kasbiy ko'nikmalarni shakllantirish.",
            subjects: ["Fizika", "Kimyo", "Robotexnika"],
            meta: { time: "08:00–16:00", size: "Max 20" },
            color: "#10b981",
            featured: true
        },
        {
            title: "Yuqori Sinf",
            level: "10-11 SINF",
            emoji: "🎓",
            desc: "OTMga tayyorgarlik va SAT/IELTS xalqaro sertifikatlari uchun maxsus guruhlar.",
            subjects: ["IELTS/SAT", "Matematika"],
            meta: { time: "08:00–17:00", size: "Max 20" },
            color: "#8b5cf6"
        },
        {
            title: "IT Markazi",
            level: "KURS",
            emoji: "💻",
            desc: "Zamonaviy dasturlash tillari va robotexnika bo'yicha qo'shimcha darslar.",
            subjects: ["Python", "Web Design", "AI"],
            meta: { time: "16:00–18:00", size: "Max 15" },
            color: "#f59e0b"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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
        <section className="programs-section">
            <div className="container">
                <motion.div
                    className="programs-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <div className="section-tag">Dasturlarimiz</div>
                        <h2 className="section-title">O'quv <span>Yo'nalishlari</span></h2>
                    </div>
                    <Link to="/dasturlar" className="btn btn-outline programs-view-all">
                        Barcha dasturlar
                    </Link>
                </motion.div>

                <motion.div
                    className="programs-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {programs.map((prog, i) => (
                        <motion.div
                            key={i}
                            className={`program-card ${prog.featured ? 'featured' : ''}`}
                            variants={itemVariants}
                        >
                            {prog.featured && <div className="featured-badge"><Star size={10} fill="currentColor" /> Eng Mashhur</div>}

                            <div className="program-header">
                                <div className="program-emoji">{prog.emoji}</div>
                                <div>
                                    <span className="program-level">{prog.level}</span>
                                    <h3 className="program-name">{prog.title}</h3>
                                </div>
                            </div>

                            <p className="program-desc">{prog.desc}</p>

                            <div className="program-subjects">
                                {prog.subjects.map(s => (
                                    <span key={s} className="subject-tag">{s}</span>
                                ))}
                            </div>

                            <div className="program-meta">
                                <div className="meta-item">
                                    <Clock size={14} /> <span>{prog.meta.time}</span>
                                </div>
                                <div className="meta-item">
                                    <Users size={14} /> <span>{prog.meta.size}</span>
                                </div>
                            </div>

                            <Link to="/boglanish" className="program-cta">
                                Ariza topshirish <ArrowRight size={14} />
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
