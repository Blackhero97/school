import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'
import './TestimonialsSection.css'

export default function TestimonialsSection() {
    const testimonials = [
        {
            text: "BM Maktabda farzandim nafaqat bilim olmoqda, balki o'z qiziqishlarini kashf etdi. Ayniqsa IT va robotexnika darslari uning eng sevimli mashg'ulotiga aylandi. Ustozlarning samimiy munosabati uchun rahmat!",
            author: "Aziza Vohidova",
            role: "Ota-ona (4-sinf)",
            initials: "AV",
            color: "#3b82f6",
            rating: 5
        },
        {
            text: "O'quv dasturi juda puxta o'ylangan. Ingliz tili darslari har kuni o'tilishi natijasultida o'g'limning tili sezilarli darajada o'sdi. Maktabdagi tartib-intizom va muhit bizni butunlay qoniqtiradi.",
            author: "Farhod Ergashev",
            role: "Ota-ona (8-sinf)",
            initials: "FE",
            color: "#10b981",
            rating: 5
        },
        {
            text: "Kichik guruhlarda o'qitish bolaga ko'proq e'tibor berish imkonini yaratadi. O'qituvchilar doimo aloqada va farzandimning natijalari haqida xabar berib turishadi. Sifatga mos narx va professional jamoa.",
            author: "Guli Nazarova",
            role: "Ota-ona (2-sinf)",
            initials: "GN",
            color: "#8b5cf6",
            rating: 5
        }
    ]

    const [active, setActive] = useState(0)

    const next = () => setActive((active + 1) % testimonials.length)
    const prev = () => setActive((active - 1 + testimonials.length) % testimonials.length)

    return (
        <section className="testimonials-section">
            <div className="container">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="section-tag">Fikrlar</div>
                    <h2 className="section-title">Ota-onalar <span>Biz Haqimizda</span></h2>
                    <p className="section-subtitle">Ishonchli ta'lim - minnatdor mijozlar.</p>
                </motion.div>

                <div className="testimonials-layout">
                    <motion.div
                        className="testimonial-main"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="quote-icon-wrap">
                            <Quote size={20} />
                        </div>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4 }}
                            >
                                <p className="testimonial-text">"{testimonials[active].text}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar" style={{ background: testimonials[active].color }}>
                                        {testimonials[active].initials}
                                    </div>
                                    <div>
                                        <h4 className="author-name">{testimonials[active].author}</h4>
                                        <span className="author-role">{testimonials[active].role}</span>
                                        <div className="testimonial-rating">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="#f59e0b" color="#f59e0b" />)}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="testimonial-nav">
                            <button className="nav-btn" onClick={prev}><ChevronLeft size={18} /></button>
                            <div className="test-dots">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`test-dot ${i === active ? 'active' : ''}`}
                                        onClick={() => setActive(i)}
                                    ></button>
                                ))}
                            </div>
                            <button className="nav-btn" onClick={next}><ChevronRight size={18} /></button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="testimonials-list"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className={`testimonial-mini ${i === active ? 'active' : ''}`}
                                onClick={() => setActive(i)}
                            >
                                <div className="mini-author">
                                    <div className="mini-avatar" style={{ background: t.color }}>{t.initials}</div>
                                    <div>
                                        <h5 className="mini-name">{t.author}</h5>
                                        <span className="mini-role">{t.role}</span>
                                    </div>
                                </div>
                                <p className="mini-text">{t.text.substring(0, 60)}...</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
