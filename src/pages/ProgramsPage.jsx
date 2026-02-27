import { ArrowRight, BookOpen, Star, Code, Globe, Music, Dumbbell } from 'lucide-react'
import './ProgramsPage.css'

const allPrograms = [
    {
        level: "1–4 sinf",
        title: "Boshlang'ich Ta'lim",
        desc: "6-10 yoshli bolalar uchun kuchli poydevor. Matematika, ona tili, ingliz tili va ijodiy fikrlash asoslari.",
        subjects: ["Matematika", "Ingliz tili", "Tabiatshunoslik", "San'at"],
        schedule: "08:00–14:00",
        classSize: "Max 18",
        duration: "4 yil",
        monthly: "800,000",
        color: "#3b82f6",
        highlights: ["Interaktiv darslar", "Sport va musiqa"],
        emoji: "📚"
    },
    {
        level: "5–9 sinf",
        title: "O'rta Ta'lim",
        desc: "11-15 yoshlilar uchun chuqur ilmiy yo'nalish. Olimpiadaga tayyorgarlik va shaxsiy rivojlanish.",
        subjects: ["Fizika", "Kimyo", "Algebra", "Biologiya"],
        schedule: "08:00–16:00",
        classSize: "Max 20",
        duration: "5 yil",
        monthly: "1,000,000",
        color: "#10b981",
        featured: true,
        emoji: "🔬"
    },
    {
        level: "10–11 sinf",
        title: "Yuqori Ta'lim",
        desc: "16-18 yoshlilar uchun universitetga tayyorgarlik va kasbiy yo'naltirish. SAT/IELTS darslari.",
        subjects: ["SAT/IELTS", "Iqtisod", "Chuqur Fanlar"],
        schedule: "08:00–17:00",
        classSize: "Max 20",
        duration: "2 yil",
        monthly: "1,200,000",
        color: "#8b5cf6",
        emoji: "🎓"
    },
    {
        level: "Kurs",
        title: "IT va Dasturlash",
        desc: "Zamonaviy IT ko'nikmalar. Python, Web va robotexnika bo'yicha amaliy mashg'ulotlar.",
        subjects: ["Python", "Web Design", "AI Basics"],
        schedule: "16:00–18:00",
        classSize: "Max 15",
        monthly: "600,000",
        color: "#f59e0b",
        emoji: "💻"
    }
]

export default function ProgramsPage() {
    return (
        <div className="programs-page">
            <section className="page-hero">
                <div className="container page-hero-content">
                    <div className="section-tag"><BookOpen size={14} /> Dasturlar</div>
                    <h1 className="page-hero-title">O'quv Yo'nalishlari</h1>
                    <p className="page-hero-desc">
                        Har yosh va qiziqishga mos dastur. Farzandingiz kelajagi uchun to'g'ri tanlov qiling.
                    </p>
                </div>
            </section>

            <section className="programs-list">
                <div className="container">
                    <div className="programs-full-grid">
                        {allPrograms.map((prog, i) => (
                            <div key={i} className={`prog-full-card ${prog.featured ? 'featured' : ''}`}>
                                {prog.featured && <div className="featured-ribbon">Eng Mashhur</div>}

                                <div className="prog-full-header">
                                    <div className="prog-emoji">{prog.emoji}</div>
                                    <div>
                                        <span className="prog-level">{prog.level}</span>
                                        <h2 className="prog-full-title">{prog.title}</h2>
                                    </div>
                                </div>

                                <p className="prog-full-desc">{prog.desc}</p>

                                <div className="prog-full-body">
                                    <div className="prog-subjects">
                                        <h4>Fanlar:</h4>
                                        <ul>
                                            {prog.subjects.map(s => (
                                                <li key={s}><span className="bullet"></span> {s}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="prog-info-side">
                                        <div className="prog-info-grid">
                                            <div className="prog-info-item">
                                                <div>
                                                    <span className="info-label">Jadval</span>
                                                    <span className="info-val">{prog.schedule}</span>
                                                </div>
                                            </div>
                                            <div className="prog-info-item">
                                                <div>
                                                    <span className="info-label">To'lov</span>
                                                    <span className="info-val">{prog.monthly}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="prog-apply-btn">
                                            Ariza berish <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
