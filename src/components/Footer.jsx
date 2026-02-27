import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, CheckCircle, Globe, Send } from 'lucide-react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-top">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src="/logo school.jpg" alt="BM Maktab Logo" className="footer-logo-img" />
                            <div>
                                <span className="footer-logo-main">BM MAKTAB</span>
                                <span className="footer-logo-sub">Professional Ta'lim</span>
                            </div>
                        </Link>
                        <p className="footer-desc">
                            Namangan viloyatidagi eng nufuzli va zamonaviy xususiy maktablardan biri.
                            Farzandingiz kelajagini bugundan biz bilan quring.
                        </p>
                        <div className="footer-socials">
                            <a href="https://t.me/bm_maktab_chust" className="social-link" target="_blank" rel="noopener noreferrer"><Send size={18} /></a>
                            <a href="#" className="social-link"><Instagram size={18} /></a>
                            <a href="#" className="social-link"><Facebook size={18} /></a>
                            <a href="mailto:info@bmmaktab.uz" className="social-link"><Mail size={18} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">Yo'nalishlar</h4>
                        <ul className="footer-links">
                            <li className="footer-link"><Link to="/haqida">Maktabimiz haqida</Link></li>
                            <li className="footer-link"><Link to="/dasturlar">O'quv dasturlari</Link></li>
                            <li className="footer-link"><Link to="/oqituvchilar">Bizning jamoa</Link></li>
                            <li className="footer-link"><Link to="/yangiliklar">So'nggi yangiliklar</Link></li>
                            <li className="footer-link"><Link to="/boglanish">Bog'lanish</Link></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">Dasturlar</h4>
                        <ul className="footer-links">
                            <li className="footer-link"><CheckCircle size={14} /> Boshlang'ich (1-4)</li>
                            <li className="footer-link"><CheckCircle size={14} /> O'rta (5-9)</li>
                            <li className="footer-link"><CheckCircle size={14} /> Yuqori (10-11)</li>
                            <li className="footer-link"><CheckCircle size={14} /> IT va Robotexnika</li>
                            <li className="footer-link"><CheckCircle size={14} /> Til o'rganish</li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-col-title">Aloqa</h4>
                        <ul className="footer-contacts">
                            <li>
                                <MapPin className="contact-icon" size={16} />
                                Namangan viloyati, Chust shahri, Chustiy ko'cha, Birlik MFY, 2-uy
                            </li>
                            <li>
                                <Phone className="contact-icon" size={16} />
                                <a href="tel:+998770572500">+998 77 057 25 00</a>
                            </li>
                            <li>
                                <Mail className="contact-icon" size={16} />
                                <a href="mailto:info@bmmaktab.uz">info@bmmaktab.uz</a>
                            </li>
                        </ul>
                        <div className="footer-hours">
                            <span>Ish vaqti:</span>
                            <strong>08:00 - 18:00 (Dush-Shan)</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container footer-bottom-content">
                    <p>© 2026 BM Maktab. Barcha huquqlar himoyalangan.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Maxfiylik siyosati</a>
                        <a href="#">Foydalanish shartlari</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
