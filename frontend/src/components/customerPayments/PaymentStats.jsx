import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function PaymentStats({
  title,
  value,
  subtitle,
  icon: Icon,
  color,
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="card border-0 shadow-sm h-100"
      style={{ borderRadius: "18px" }}
    >
      <div className="card-body">

        <div className="d-flex justify-content-between align-items-center">

          <div>

            <small className="text-muted">
              {title}
            </small>

            <h3 className="fw-bold mt-2 mb-1">

              {typeof value === "number" ? (
                <CountUp
                  end={value}
                  duration={2}
                  separator=","
                />
              ) : (
                value
              )}

            </h3>

            <small className="text-muted">
              {subtitle}
            </small>

          </div>

          <div
            className={`bg-${color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center`}
            style={{
              width: 60,
              height: 60,
            }}
          >
            <Icon
              size={28}
              className={`text-${color}`}
            />
          </div>

        </div>

      </div>
    </motion.div>
  );
}