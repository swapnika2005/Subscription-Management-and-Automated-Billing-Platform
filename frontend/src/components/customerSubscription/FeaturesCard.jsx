import { motion } from "framer-motion";
import {
  CheckCircle,
  FileText,
  Receipt,
  BarChart3,
  ShieldCheck,
  Users,
  Headphones,
  Database,
} from "lucide-react";

export default function FeaturesCard() {
  const features = [
    {
      icon: FileText,
      title: "Unlimited Invoices",
      description: "Create unlimited invoices",
      color: "primary",
    },
    {
      icon: Receipt,
      title: "GST Billing",
      description: "Automatic GST calculation",
      color: "success",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Business reports & insights",
      color: "warning",
    },
    {
      icon: ShieldCheck,
      title: "API Access",
      description: "REST API integration",
      color: "info",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Up to 25 team members",
      color: "secondary",
    },
    {
      icon: Headphones,
      title: "Priority Support",
      description: "24×7 Email & Chat Support",
      color: "danger",
    },
    {
      icon: Database,
      title: "100 GB Storage",
      description: "Secure cloud storage",
      color: "dark",
    },
    {
      icon: CheckCircle,
      title: "Automatic Backups",
      description: "Daily encrypted backups",
      color: "success",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="card border-0 shadow-sm h-100"
      style={{ borderRadius: "18px" }}
    >
      <div className="card-header bg-white border-0">
        <h5 className="fw-bold mb-1">
          Plan Features
        </h5>

        <small className="text-muted">
          Everything included in your Professional Plan.
        </small>
      </div>

      <div className="card-body">

        <div className="row g-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                className="col-md-6"
                key={index}
              >
                <div
                  className="border rounded-4 p-3 h-100"
                  style={{
                    background: "#f8f9fa",
                    transition: "0.3s",
                  }}
                >
                  <div className="d-flex">

                    <div
                      className={`bg-${feature.color} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3`}
                      style={{
                        width: 50,
                        height: 50,
                        minWidth: 50,
                      }}
                    >
                      <Icon
                        size={22}
                        className={`text-${feature.color}`}
                      />
                    </div>

                    <div>

                      <h6 className="fw-bold mb-1">
                        {feature.title}
                      </h6>

                      <small className="text-muted">
                        {feature.description}
                      </small>

                      <div className="mt-2">
                        <span className="badge bg-success">
                          Included
                        </span>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            );
          })}

        </div>

        <hr className="my-4" />

        <div className="alert alert-primary mb-0">

          <div className="d-flex align-items-center">

            <CheckCircle
              size={22}
              className="me-2"
            />

            <div>
              <strong>
                Professional Plan Active
              </strong>

              <div className="small">
                You currently have access to all premium
                features included in your subscription.
              </div>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}