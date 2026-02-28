import { motion } from "framer-motion";
import { Users, BookOpen, Award, Globe } from "lucide-react";
import "./StatsSection.css";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: 400,
      suffix: "+",
      label: "Mamnun O'quvchilar",
      color: "#3b82f6",
    },
    {
      icon: BookOpen,
      value: 60,
      suffix: "+",
      label: "Mutaxassis Ustozlar",
      color: "#10b981",
    },
    {
      icon: Award,
      value: 150,
      suffix: "+",
      label: "Yutuq va Mukofotlar",
      color: "#8b5cf6",
    },
    {
      icon: Globe,
      value: 4,
      suffix: "+",
      label: "Xalqaro Hamkorlar",
      color: "#f59e0b",
    },
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <div
                className="stat-icon"
                style={{ background: `${stat.color}10`, color: stat.color }}
              >
                <stat.icon size={22} />
              </div>
              <div className="stat-value">
                <span className="count">{stat.value}</span>
                <span className="suffix">{stat.suffix}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
