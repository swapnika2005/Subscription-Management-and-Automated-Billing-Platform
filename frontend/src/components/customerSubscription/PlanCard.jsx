import { motion } from "framer-motion";
import {
  Crown,
  CalendarDays,
  IndianRupee,
  CheckCircle,
} from "lucide-react";

export default function PlanCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card border-0 shadow-sm mb-4"
      style={{ borderRadius: "18px" }}
    >
      <div className="card-body">

        <div className="row align-items-center">

          {/* Left Side */}

          <div className="col-lg-8">

            <div className="d-flex align-items-center">

              <div
                className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "70px",
                  height: "70px",
                }}
              >
                <Crown size={34} />
              </div>

              <div>

                <h3 className="fw-bold mb-1">
                  Professional Plan
                </h3>

                <span className="badge bg-success px-3 py-2">
                  <CheckCircle size={14} className="me-1" />
                  Active
                </span>

                <p className="text-muted mt-2 mb-0">
                  Perfect for growing businesses with advanced billing
                  features.
                </p>

              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-4 mt-4 mt-lg-0">

            <div className="row text-center">

              <div className="col-6">

                <div
                  className="border rounded-3 p-3"
                  style={{ background: "#f8f9fa" }}
                >
                  <IndianRupee
                    size={22}
                    className="text-primary mb-2"
                  />

                  <h4 className="fw-bold mb-1">
                    ₹999
                  </h4>

                  <small className="text-muted">
                    Per Month
                  </small>

                </div>

              </div>

              <div className="col-6">

                <div
                  className="border rounded-3 p-3"
                  style={{ background: "#f8f9fa" }}
                >
                  <CalendarDays
                    size={22}
                    className="text-success mb-2"
                  />

                  <h6 className="fw-bold mb-1">
                    15 Aug 2026
                  </h6>

                  <small className="text-muted">
                    Next Billing
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>

        <hr className="my-4" />

        {/* Bottom Statistics */}

        <div className="row text-center">

          <div className="col-md-3">
            <h6 className="text-muted">Subscription ID</h6>
            <h5 className="fw-bold">
              SUB-2026-001
            </h5>
          </div>

          <div className="col-md-3">
            <h6 className="text-muted">Billing Cycle</h6>
            <h5 className="fw-bold">
              Monthly
            </h5>
          </div>

          <div className="col-md-3">
            <h6 className="text-muted">Start Date</h6>
            <h5 className="fw-bold">
              01 Jul 2026
            </h5>
          </div>

          <div className="col-md-3">
            <h6 className="text-muted">Renewal</h6>
            <h5 className="fw-bold text-success">
              Auto Enabled
            </h5>
          </div>

        </div>

      </div>
    </motion.div>
  );
}