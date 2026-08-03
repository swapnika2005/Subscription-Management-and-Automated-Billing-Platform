import { motion } from "framer-motion";
import {
  FolderOpen,
  Database,
  Users,
  Activity,
} from "lucide-react";

export default function UsageCard() {
  const usage = [
    {
      icon: FolderOpen,
      title: "Projects",
      used: 8,
      total: 20,
      color: "primary",
    },
    {
      icon: Database,
      title: "Storage",
      used: 40,
      total: 100,
      unit: "GB",
      color: "success",
    },
    {
      icon: Activity,
      title: "API Requests",
      used: 4250,
      total: 10000,
      color: "warning",
    },
    {
      icon: Users,
      title: "Team Members",
      used: 12,
      total: 25,
      color: "info",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="card border-0 shadow-sm h-100"
      style={{ borderRadius: "18px" }}
    >
      <div className="card-header bg-white border-0">
        <h5 className="fw-bold mb-1">
          Usage Analytics
        </h5>

        <small className="text-muted">
          Track your subscription usage.
        </small>
      </div>

      <div className="card-body">

        {usage.map((item, index) => {
          const percentage = Math.round(
            (item.used / item.total) * 100
          );

          const Icon = item.icon;

          return (
            <div
              className="mb-4"
              key={index}
            >
              <div className="d-flex justify-content-between align-items-center mb-2">

                <div className="d-flex align-items-center">

                  <div
                    className={`bg-${item.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3`}
                    style={{
                      width: 45,
                      height: 45,
                    }}
                  >
                    <Icon
                      size={20}
                      className={`text-${item.color}`}
                    />
                  </div>

                  <div>
                    <h6 className="mb-0 fw-semibold">
                      {item.title}
                    </h6>

                    <small className="text-muted">
                      {item.used}
                      {item.unit ? item.unit : ""}
                      {" / "}
                      {item.total}
                      {item.unit ? item.unit : ""}
                    </small>

                  </div>

                </div>

                <span className="fw-bold">
                  {percentage}%
                </span>

              </div>

              <div
                className="progress"
                style={{
                  height: "10px",
                  borderRadius: "10px",
                }}
              >
                <div
                  className={`progress-bar bg-${item.color}`}
                  style={{
                    width: `${percentage}%`,
                  }}
                ></div>
              </div>

            </div>
          );
        })}

        <hr />

        <div className="text-center">

          <h2 className="fw-bold text-primary mb-1">
            42%
          </h2>

          <p className="text-muted mb-0">
            Overall Subscription Usage
          </p>

        </div>

      </div>
    </motion.div>
  );
}