import { Shield, Heart, Target, BookOpen, CheckCircle } from 'lucide-react'
import GallerySection from '../sections/GallerySection'
import './AboutPage.css'

const values = [
    { icon: Target, title: "Maqsad", desc: "Har bir o'quvchini hayotga tayyorlash va ularning salohiyatini ochib berish.", color: "#3b82f6" },
    { icon: Heart, title: "Mehr-muhabbat", desc: "Har bir bolaga oilasidek g'amxo'rlik, issiq va xavfsiz muhit yaratamiz.", color: "#ef4444" },
    { icon: Shield, title: "Sifat kafolati", desc: "ISO sertifikatlangan o'quv dasturlari va natijalarga yo'naltirilgan ta'lim.", color: "#10b981" },
    { icon: Target, title: "Muvaffaqiyat", desc: "O'quvchilarimiz respublika va xalqaro olimpiadalar g'olibleri.", color: "#f59e0b" },
]

const milestones = [
    { year: "2010", title: "Maktab tashkil etildi", desc: "50 o'quvchi bilan o'z faoliyatini boshladi" },
    { year: "2014", title: "IT bo'limi ochildi", desc: "Zamonaviy informatika va dasturlash darslari kiritildi" },
    { year: "2018", title: "Xalqaro hamkorlik", desc: "Finlandiya va Koreya maktablari bilan shartnoma imzolandi" },
    { year: "2022", title: "Yangi bino", desc: "Zamonaviy sport va IT laboratoriyalari bilan jihozlangan yangi bino" },
    { year: "2025", title: "TOP Reyting", desc: "O'zbekiston xususiy maktablari reytingida yuqori o'rin" },
]

export default function AboutPage() {
    return (
        <div className="about-page">
            <section className="page-hero">
                <div className="container page-hero-content">
                    <div className="section-tag"><BookOpen size={14} /> Maktab haqida</div>
                    <h1 className="page-hero-title">Biz Haqimizda</h1>
                    <p className="page-hero-desc">
                        BM Maktab — zamonaviy ta'lim muassasasi bo'lib, har bir o'quvchini barkamol shaxs sifatida tarbiyalashni maqsad qilgan.
                    </p>
                </div>
            </section>

            <section className="mission-section">
                <div className="container mission-layout">
                    <div className="mission-content">
                        <div className="section-tag">Missiyamiz</div>
                        <h2 className="section-title">Har bir Bola <span>Iste'dodli</span></h2>
                        <p className="mission-text">
                            Biz har bir o'quvchining noyob qobiliyatiga ishonamiz. Vazifamiz — ularning salohiyatini ochib berish va kelajakka mustahkam poydevor yaratishdir.
                            Zamonaviy metodlar va individual yondashuv orqali natijaga erishamiz.
                        </p>
                        <ul className="mission-checks">
                            <li><CheckCircle size={16} /> Individual yondashuv</li>
                            <li><CheckCircle size={16} /> Zamonaviy metodikalar</li>
                            <li><CheckCircle size={16} /> Xalqaro standartlar</li>
                        </ul>
                    </div>

                    <div className="mission-stats">
                        <div className="m-stat">
                            <span className="m-stat-val">15+</span>
                            <span className="m-stat-label">Yillik tajriba</span>
                        </div>
                        <div className="m-stat">
                            <span className="m-stat-val">1200+</span>
                            <span className="m-stat-label">O'quvchilar</span>
                        </div>
                        <div className="m-stat">
                            <span className="m-stat-val">60+</span>
                            <span className="m-stat-label">Ustozlar</span>
                        </div>
                        <div className="m-stat">
                            <span className="m-stat-val">98%</span>
                            <span className="m-stat-label">Natijadorlik</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="values-section">
                <div className="container">
                    <div className="values-header">
                        <div className="section-tag">Qadriyatlar</div>
                        <h2 className="section-title">Bizning <span>Asoslarimiz</span></h2>
                    </div>
                    <div className="values-grid">
                        {values.map((v, i) => (
                            <div key={i} className="value-card card">
                                <div className="value-icon" style={{ background: `${v.color}10`, color: v.color }}>
                                    <v.icon size={24} />
                                </div>
                                <div>
                                    <h3 className="value-title">{v.title}</h3>
                                    <p className="value-desc">{v.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="timeline-section">
                <div className="container">
                    <div className="timeline-header">
                        <div className="section-tag">Tarix</div>
                        <h2 className="section-title">Rivojlanish <span>Yo'li</span></h2>
                    </div>
                    <div className="timeline">
                        {milestones.map((m, i) => (
                            <div key={i} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <span className="timeline-year">{m.year}</span>
                                    <h3 className="timeline-title">{m.title}</h3>
                                    <p className="timeline-desc">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <GallerySection title="Maktab Hayoti" subtitle="Maktabimizning quvnoq va mazmunli lahzalari" />
        </div>
    )
}
