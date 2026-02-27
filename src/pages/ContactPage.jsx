import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import './ContactPage.css'

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', phone: '', program: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <div className="contact-page">
            <section className="page-hero">
                <div className="container page-hero-content">
                    <div className="section-tag"><Mail size={14} /> Bog'lanish</div>
                    <h1 className="page-hero-title">Biz Bilan Bog'laning</h1>
                    <p className="page-hero-desc">
                        Ariza topshirish yoki savollaringiz uchun bizga murojaat qiling. 24 soat ichida javob beramiz.
                    </p>
                </div>
            </section>

            <section className="contact-info-section">
                <div className="container">
                    <div className="contact-info-grid">
                        <div className="contact-info-card card">
                            <div className="ci-icon"><MapPin size={20} /></div>
                            <h3 className="ci-title">Manzil</h3>
                            <p className="ci-line">Namangan viloyati, Chust shahri,</p>
                            <p className="ci-line">Chustiy ko'cha, Birlik MFY, 2-uy</p>
                        </div>
                        <div className="contact-info-card card">
                            <div className="ci-icon"><Phone size={20} /></div>
                            <h3 className="ci-title">Telefon</h3>
                            <p className="ci-line">+998 77 057 25 00</p>
                        </div>
                        <div className="contact-info-card card">
                            <div className="ci-icon"><Mail size={20} /></div>
                            <h3 className="ci-title">Email</h3>
                            <p className="ci-line">info@bmmaktab.uz</p>
                        </div>
                        <div className="contact-info-card card">
                            <div className="ci-icon"><Clock size={20} /></div>
                            <h3 className="ci-title">Ish vaqti</h3>
                            <p className="ci-line">Dush–Shan: 08:00–18:00</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-form-section">
                <div className="container contact-form-grid">
                    <div className="contact-form-wrapper card">
                        {submitted ? (
                            <div className="form-success">
                                <div className="success-icon"><CheckCircle size={40} /></div>
                                <h2>Arizangiz qabul qilindi!</h2>
                                <p>Tez orada bizning mutaxassislarimiz siz bilan bog'lanishadi.</p>
                                <button className="btn btn-outline" onClick={() => setSubmitted(false)}>Yana yuborish</button>
                            </div>
                        ) : (
                            <>
                                <h2 className="form-title">Ariza Qoldirish</h2>
                                <p className="form-desc">Ma'lumotlaringizni qoldiring, biz sizga qo'ng'iroq qilamiz.</p>
                                <form className="contact-form" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label>Ismingiz</label>
                                        <input type="text" placeholder="Ism Familiya" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Telefon raqamingiz</label>
                                        <input type="tel" placeholder="+998 90 000 00 00" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Xabar yoki Izoh</label>
                                        <textarea placeholder="Sizni nima qiziqtirmoqda?" rows="4"></textarea>
                                    </div>
                                    <button className="btn btn-primary form-submit">
                                        <Send size={16} /> Yuborish
                                    </button>
                                </form>
                            </>
                        )}
                    </div>

                    <div className="contact-right">
                        <div className="map-wrapper card">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d635.7551816517699!2d71.23140918717758!3d40.98805224682908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1suz!2sus!4v1772201543529!5m2!1suz!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="BM Maktab Map"
                            ></iframe>
                        </div>
                        <div className="quick-contact card">
                            <h3>Tez aloqa</h3>
                            <a href="tel:+998770572500" className="quick-phone">+998 77 057 25 00</a>
                            <a href="https://t.me/bm_maktab_chust" target="_blank" rel="noopener noreferrer" className="telegram-btn">Telegram orqali yozish</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
