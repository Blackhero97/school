import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Send, MapPin } from 'lucide-react'
import './CTASection.css'

export default function CTASection() {
    return (
        <section className="cta-section">
            <motion.div
                className="cta-content container"
                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
                <div className="cta-badge">BM Maktab - 2026 Qabul</div>
                <h2 className="cta-title">Farzandingiz kelajagi <br /> uchun hozir qadam tashlang</h2>
                <p className="cta-desc">
                    Xalqaro darajadagi ta'lim va zamonaviy o'quv dasturlari bilan
                    farzandingizning noyob salohiyatini birgalikda kashf etamiz.
                </p>

                <div className="cta-actions">
                    <Link to="/boglanish" className="btn cta-btn-primary">
                        <Send size={18} />
                        Ariza Topshirish
                    </Link>
                    <Link to="/haqida" className="btn cta-btn-outline">
                        Batafsil ma'lumot
                    </Link>
                </div>

                <div className="cta-address">
                    <MapPin size={14} /> Namangan viloyati, Chust shahri, Chustiy ko'cha, Birlik MFY, 2-uy
                </div>
            </motion.div>
        </section>
    )
}
