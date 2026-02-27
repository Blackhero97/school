import { Star, Award, BookOpen, Users } from 'lucide-react'
import './TeachersPage.css'

const teachers = [
    { name: "Nodira Karimova", subject: "Matematika", initials: "NK", color: "#3b82f6", bio: "Respublika olimpiada hakamı, 18 yillik tajriba. 50 dan ortiq oltin medal egalari ustozi.", exp: "18 yil", rating: 5.0, achievements: ["Dotsent", "Olimpiada hakamı"] },
    { name: "Jasur Rahimov", subject: "Ingliz tili", initials: "JR", color: "#10b981", bio: "IELTS 8.5, xalqaro tajribaga ega mutaxassis. Cambridge metodikasi bo'yicha dars beradi.", exp: "12 yil", rating: 4.9, achievements: ["IELTS 8.5", "CELTA"] },
    { name: "Malika Toshpulatova", subject: "Fizika", initials: "MT", color: "#8b5cf6", bio: "O'quvchilari respublika fizika olimpiadasi g'olibleri. Chuqurlashtirilgan fizika kursi.", exp: "20 yil", rating: 5.0, achievements: ["Fan nomzodi", "20 yil tajriba"] },
    { name: "Dilshod Yusupov", subject: "Informatika", initials: "DY", color: "#f59e0b", bio: "Google certified developer. Python va robotexnika bo'yicha mutaxassis.", exp: "10 yil", rating: 4.8, achievements: ["Google Cert", "IT Expert"] }
]

export default function TeachersPage() {
    return (
        <div className="teachers-page">
            <section className="page-hero">
                <div className="container page-hero-content">
                    <div className="section-tag"><Users size={14} /> Jamoamiz</div>
                    <h1 className="page-hero-title">Bizning Ustozlar</h1>
                    <p className="page-hero-desc">
                        O'z sohasining mutaxassislari, tajribali va fidoyi o'qituvchilar jamoasi.
                    </p>
                </div>
            </section>

            <section className="teachers-list-section">
                <div className="container">
                    <div className="teachers-full-grid">
                        {teachers.map((t, i) => (
                            <div key={i} className="teacher-full-card card">
                                <div className="teacher-full-header">
                                    <div className="teacher-full-avatar" style={{ background: t.color }}>
                                        {t.initials}
                                    </div>
                                    <div className="teacher-full-info">
                                        <h3 className="teacher-full-name">{t.name}</h3>
                                        <span className="teacher-full-subject" style={{ color: t.color }}>{t.subject}</span>
                                        <div className="teacher-full-rating">
                                            {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} fill="#f59e0b" color="#f59e0b" />)}
                                            <span>{t.rating}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="teacher-bio">{t.bio}</p>
                                <div className="teacher-stats-row">
                                    <div className="t-stat">
                                        <BookOpen size={14} />
                                        <span>{t.exp} tajriba</span>
                                    </div>
                                    <div className="t-stat">
                                        <Award size={14} />
                                        <span>Sertifikatlangan</span>
                                    </div>
                                </div>
                                <div className="teacher-achievements">
                                    {t.achievements.map(a => (
                                        <span key={a} className="achievement-tag">{a}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
