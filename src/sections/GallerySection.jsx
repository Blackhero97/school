import { useRef, useEffect } from 'react'
import { motion, useAnimationControls } from 'framer-motion'
import { Image as ImageIcon } from 'lucide-react'
import './GallerySection.css'

const row1 = [
    { id: 1, src: '/images/1.avif', title: 'O\'quv jarayoni' },
    { id: 2, src: '/images/2.jpg', title: 'IT Laboratoriya' },
    { id: 3, src: '/images/3.jpg', title: 'Maktab hayoti' },
    { id: 4, src: '/images/4.jpg', title: 'Dars vaqtida' },
    { id: 5, src: '/images/5.jpg', title: 'Ijodiy muhit' },
    { id: 6, src: '/images/6.jpg', title: 'Zamonaviy sinfxona' },
]

const row2 = [
    { id: 7, src: '/images/7.jpg', title: 'Bilim maskani' },
    { id: 8, src: '/images/8.jpg', title: 'Quvnoq o\'quvchilar' },
    { id: 9, src: '/images/9.jpg', title: 'Sport mashg\'ulotlari' },
    { id: 10, src: '/images/10.jpg', title: 'Tadbir' },
    { id: 11, src: '/images/11.jpg', title: 'Kutubxona' },
    { id: 13, src: '/images/13.jpg', title: 'Laboratoriya' },
]

function MarqueeRow({ items, direction = "left", speed = 40 }) {
    // Duplicate items to create seamless loop
    const doubledItems = [...items, ...items, ...items]

    return (
        <div className={`marquee-track direction-${direction}`}>
            <motion.div
                className="marquee-content"
                animate={{
                    x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"]
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {doubledItems.map((item, idx) => (
                    <motion.div
                        key={`${item.id}-${idx}`}
                        className="marquee-item"
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <img src={item.src} alt={item.title} loading="lazy" />
                        <div className="item-info">
                            <span className="item-title">{item.title}</span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default function GallerySection({ title = "Maktab Hayoti", subtitle = "Bizning kundalik faoliyatimizdan namunalar" }) {
    return (
        <section className="gallery-section-infinite">
            <div className="container">
                <div className="gallery-header">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="section-tag"><ImageIcon size={14} /> Galereya</div>
                        <h2 className="section-title">{title.split(' ')[0]} <span>{title.split(' ')[1]}</span></h2>
                        <p className="section-desc">{subtitle}</p>
                    </motion.div>
                </div>
            </div>

            <div className="ribbon-container">
                <MarqueeRow items={row1} direction="left" speed={30} />
                <MarqueeRow items={row2} direction="right" speed={35} />
            </div>

            <div className="gallery-fade-left"></div>
            <div className="gallery-fade-right"></div>
        </section>
    )
}
