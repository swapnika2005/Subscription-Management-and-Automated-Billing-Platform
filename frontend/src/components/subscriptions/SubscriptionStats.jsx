import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const colorMap = {
  primary: {
    bg: "bg-primary",
    light: "#E8F1FF",
    text: "text-primary",
  },
  success: {
    bg: "bg-success",
    light: "#EAFBF3",
    text: "text-success",
  },
  warning: {
    bg: "bg-warning",
    light: "#FFF7E6",
    text: "text-warning",
  },
  danger: {
    bg: "bg-danger",
    light: "#FFECEC",
    text: "text-danger",
  },
};

export default function SubscriptionStats({
  title,
  value,
  subtitle,
  icon: Icon,
  color = "primary",
}) {
  const theme = colorMap[color] || colorMap.primary;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
    >
      <div
        className="card border-0 shadow-sm h-100"
        style={{
          borderRadius: "18px",
        }}
      >
        <div className="card-body p-4">

          <div className="d-flex justify-content-between align-items-start">

            <div>

              <small className="text-secondary fw-semibold text-uppercase">
                {title}
              </small>

              <h2
                className="fw-bold mt-2 mb-1"
                style={{
                  fontSize: "2rem",
                }}
              >
                {value}
              </h2>

              <div
                className={`d-flex align-items-center gap-1 fw-semibold ${theme.text}`}
              >
                <ArrowUpRight size={16} />
                <small>{subtitle}</small>
              </div>

            </div>

            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                background: theme.light,
              }}
            >
              <div
                className={`${theme.bg} text-white rounded-3 d-flex align-items-center justify-content-center`}
                style={{
                  width: 46,
                  height: 46,
                }}
              >
                {Icon && <Icon size={24} />}
              </div>
            </div>

          </div>

        </div>
      </div>
    </motion.div>
  );
}