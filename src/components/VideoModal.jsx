import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import './VideoModal.css'

export default function VideoModal({ isOpen, onClose, videoSrc }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="video-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="video-modal-container"
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button className="video-modal-close" onClick={onClose}>
                            <X size={24} />
                        </button>

                        <div className="video-wrapper">
                            <video
                                controls
                                autoPlay
                                className="video-element"
                                src={videoSrc}
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
