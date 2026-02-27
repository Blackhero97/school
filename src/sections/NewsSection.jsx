import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ChevronRight, Newspaper } from 'lucide-react'
import './NewsSection.css'

export default function NewsSection() {
    const news = [
        {
            category: "Olimpiada",
            title: "O'quvchilarimiz Matematika Olimpiadasida g'olib bo'ldi!",
            excerpt: "BM Maktab o'quvchilari respublika matematika olimpiadasida 3 ta oltin va 2 ta kumush medanni qo'lga kiritishdi.",
            date: "25 Fevral, 2026",
            featured: true,
            color: "#f59e0b"
        },
        {
            category: "Yangilik",
            title: "Yangi IT laboratoriyasi ochildi",
            excerpt: "Zamonaviy iMac'lar va robotexnika uskunalari bilan jihozlangan yangi IT markazi o'quvchilar ixtiyorida.",
            date: "18 Fevral, 2026",
            color: "#3b82f6"
        },
        {
            category: "Ta'lim",
            title: "2026-2027 o'quv yili qabuli",
            excerpt: "Yangi o'quv yili uchun arizalar qabul qilish jarayoni rasman boshlandi. O'rinlar cheklangan.",
            date: "10 Fevral, 2026",
            color: "#10b981"
        }
    ]

    const featured = news.find(n => n.featured)
    const side = news.filter(n => !n.featured)

    return (
        <section className="news-section">
            <div className="container">
                <motion.div
                    className="news-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <div className="section-tag"><Newspaper size={12} /> Yangiliklar</div>
                        <h2 className="section-title">BM Maktab <span>Hayoti</span></h2>
                    </div>
                    <Link to="/yangiliklar" className="btn btn-outline">
                        Barcha yangiliklar
                    </Link>
                </motion.div>

                <div className="news-layout">
                    <motion.div
                        className="news-featured card"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="news-cat" style={{ color: featured.color, borderColor: `${featured.color}40`, background: `${featured.color}10` }}>
                            {featured.category}
                        </span>
                        <h3 className="news-featured-title">{featured.title}</h3>
                        <p className="news-excerpt">{featured.excerpt}</p>
                        <div className="news-meta">
                            <span className="news-meta-item"><Calendar size={13} /> {featured.date}</span>
                            <button className="news-read-btn">To'liq o'qish <ChevronRight size={14} /></button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="news-sidebar"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {side.map((n, i) => (
                            <div key={i} className="news-side-item">
                                <h4 className="news-side-title">{n.title}</h4>
                                <p className="news-side-excerpt">{n.excerpt}</p>
                                <Link to="/yangiliklar" className="news-link">
                                    O'qish <ChevronRight size={12} />
                                </Link>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
