import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, BookOpen, Award } from 'lucide-react'
import './TeachersSection.css'

export default function TeachersSection() {
    const teachers = [
        { name: "Nodira Karimova", subject: "Matematika", initials: "NK", color: "#3b82f6", bio: "Respublika olimpiada hakamı, 18 yillik tajriba.", exp: "18 yil", rating: 5.0 },
        { name: "Jasur Rahimov", subject: "Ingliz tili", initials: "JR", color: "#10b981", bio: "IELTS 8.5, xalqaro tajribaga ega mutaxassis.", exp: "12 yil", rating: 4.9 },
        { name: "Malika Toshpulatova", subject: "Fizika", initials: "MT", color: "#8b5cf6", bio: "O'quvchilari respublika fizika olimpiadasi g'olibleri.", exp: "20 yil", rating: 5.0 },
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
        <section className="teachers-section">
            <div className="container">
                <motion.div
                    className="teachers-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <div className="section-tag">Bizning Jamoa</div>
                        <h2 className="section-title">Malakali <span>Ustozlar</span></h2>
                    </div>
                    <Link to="/oqituvchilar" className="btn btn-outline">
                        Barcha jamoa
                    </Link>
                </motion.div>

                <motion.div
                    className="teachers-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {teachers.map((t, i) => (
                        <motion.div
                            key={i}
                            className="teacher-card card"
                            variants={itemVariants}
                        >
                            <div className="teacher-top">
                                <div className="teacher-avatar" style={{ background: t.color }}>
                                    {t.initials}
                                </div>
                                <div className="teacher-info">
                                    <h3 className="teacher-name">{t.name}</h3>
                                    <span className="teacher-subject" style={{ color: t.color }}>{t.subject}</span>
                                    <div className="teacher-rating">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="#f59e0b" color="#f59e0b" />)}
                                        <span>{t.rating}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="teacher-bio">{t.bio}</p>
                            <div className="teacher-stats">
                                <div className="t-stat">
                                    <BookOpen size={14} />
                                    <span>{t.exp} tajriba</span>
                                </div>
                                <div className="t-stat">
                                    <Award size={14} />
                                    <span>Top Ustoz</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
