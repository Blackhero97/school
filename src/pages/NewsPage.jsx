import { Calendar, Clock, ChevronRight, Newspaper } from 'lucide-react'
import './NewsPage.css'

const allNews = [
    {
        date: "25 Fevral 2026",
        category: "Olimpiada",
        title: "O'quvchilarimiz Respublika Matematika Olimpiadasida g'olib bo'ldi!",
        excerpt: "BM Maktab o'quvchilari respublika matematika olimpiadasida 3 ta oltin, 2 ta kumush medanni qo'lga kiritishdi. Bu maktab tarixidagi eng katta muvaffaqiyat.",
        readTime: "3 daqiqa",
        color: "#f59e0b",
        featured: true,
    },
    {
        date: "18 Fevral 2026",
        category: "Yangilik",
        title: "Maktabimizda yangi IT laboratoriyasi ochildi",
        excerpt: "Zamonaviy kompyuter va robotexnika uskunalari bilan jihozlangan yangi IT markazi o'quvchilarga xizmat ko'rsata boshladi. 50 ta zamonaviy iMac va 20 ta robot.",
        readTime: "5 daqiqa",
        color: "#3b82f6",
    },
    {
        date: "10 Fevral 2026",
        category: "Ta'lim",
        title: "2026-2027 o'quv yiliga qabul boshlandi",
        excerpt: "Yangi o'quv yili uchun ariza qabul qilish boshlandi. Cheklangan o'rinlar uchun tezroq murojaat qiling. Bepul sinalish darsi ham mavjud.",
        readTime: "2 daqiqa",
        color: "#10b981",
    },
    {
        date: "3 Fevral 2026",
        category: "Sport",
        title: "Futbol musobaqasida g'alaba",
        excerpt: "Maktabimiz futbol jamoasi shahar birinchiligi musobaqasida 1-o'rinni qo'lga kiritid. Jamoamizni tabriklang!",
        readTime: "2 daqiqa",
        color: "#06b6d4",
    },
    {
        date: "28 Yanvar 2026",
        category: "Hamkorlik",
        title: "Britaniya elchixonasi bilan hamkorlik shartnomasi imzolandi",
        excerpt: "Britaniya elchixonasi bilan imzolangan bitim doirasida o'quvchilarimiz Buyuk Britaniyaga o'quv safari bilan borishlari mumkin.",
        readTime: "4 daqiqa",
        color: "#8b5cf6",
    }
]

export default function NewsPage() {
    return (
        <div className="news-page">
            <section className="page-hero">
                <div className="container page-hero-content">
                    <div className="section-tag"><Newspaper size={14} /> Yangiliklar</div>
                    <h1 className="page-hero-title">So'nggi Xabarlar</h1>
                    <p className="page-hero-desc">
                        Maktab hayotidan yangiliklar, muvaffaqiyatlar va tadbirlar haqida muntazam ravishda xabardor bo'ling.
                    </p>
                </div>
            </section>

            <section className="news-list-section">
                <div className="container">
                    {/* Featured */}
                    {allNews.filter(n => n.featured).map((item, i) => (
                        <div key={i} className="news-featured-full card">
                            <div className="nf-top">
                                <span className="n-category" style={{ color: item.color, background: `${item.color}15`, borderColor: `${item.color}30` }}>
                                    {item.category}
                                </span>
                                <span className="n-featured-badge">🔥 Asosiy Yangilik</span>
                            </div>
                            <h2 className="nf-title">{item.title}</h2>
                            <p className="nf-excerpt">{item.excerpt}</p>
                            <div className="n-meta">
                                <span><Calendar size={13} /> {item.date}</span>
                                <span><Clock size={13} /> {item.readTime}</span>
                            </div>
                            <button className="n-read-btn">
                                To'liq o'qish <ChevronRight size={16} />
                            </button>
                        </div>
                    ))}

                    {/* Grid */}
                    <div className="news-list-grid">
                        {allNews.filter(n => !n.featured).map((item, i) => (
                            <div key={i} className="news-list-card card">
                                <div className="nl-top">
                                    <span className="n-category" style={{ color: item.color, background: `${item.color}15`, borderColor: `${item.color}30` }}>
                                        {item.category}
                                    </span>
                                    <span className="n-date"><Calendar size={11} /> {item.date}</span>
                                </div>
                                <h3 className="nl-title">{item.title}</h3>
                                <p className="nl-excerpt">{item.excerpt}</p>
                                <div className="nl-footer">
                                    <span><Clock size={12} /> {item.readTime}</span>
                                    <button className="n-read-btn-sm">
                                        O'qish <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
