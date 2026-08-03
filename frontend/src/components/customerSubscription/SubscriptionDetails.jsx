import { motion } from "framer-motion";
import {
  Hash,
  Calendar,
  CreditCard,
  Repeat,
  User,
  CheckCircle,
} from "lucide-react";

export default function SubscriptionDetails() {
  const details = [
    {
      icon: Hash,
      title: "Subscription ID",
      value: "SUB-2026-001",
      color: "primary",
    },
    {
      icon: User,
      title: "Customer",
      value: "Alice Johnson",
      color: "info",
    },
    {
      icon: Calendar,
      title: "Start Date",
      value: "01 Jul 2026",
      color: "success",
    },
    {
      icon: Repeat,
      title: "Billing Cycle",
      value: "Monthly",
      color: "warning",
    },
    {
      icon: CreditCard,
      title: "Payment Method",
      value: "Visa •••• 4242",
      color: "secondary",
    },
    {
      icon: CheckCircle,
      title: "Auto Renewal",
      value: "Enabled",
      color: "success",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card border-0 shadow-sm h-100"
      style={{ borderRadius: "18px" }}
    >
      <div className="card-header bg-white border-0 pb-0">
        <h5 className="fw-bold mb-1">
          Subscription Details
        </h5>

        <small className="text-muted">
          View complete subscription information.
        </small>
      </div>

      <div className="card-body">

        <div className="row g-3">

          {details.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className="col-md-6"
                key={index}
              >
                <div
                  className="border rounded-4 p-3 h-100"
                  style={{
                    background: "#f8f9fa",
                  }}
                >
                  <div className="d-flex align-items-center">

                    <div
                      className={`bg-${item.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3`}
                      style={{
                        width: 50,
                        height: 50,
                      }}
                    >
                      <Icon
                        size={22}
                        className={`text-${item.color}`}
                      />
                    </div>

                    <div>
                      <small className="text-muted d-block">
                        {item.title}
                      </small>

                      <div className="fw-bold fs-6">
                        {item.value}
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}

        </div>

        <hr className="my-4" />

        <div
          className="alert alert-success d-flex align-items-center mb-0"
          role="alert"
        >
          <CheckCircle
            size={20}
            className="me-2"
          />

          Your subscription is active and will automatically renew on
          <strong className="ms-1">
            15 Aug 2026.
          </strong>
        </div>

      </div>
    </motion.div>
  );
}