import { motion } from "framer-motion";
import {
  ArrowUpCircle,
  Download,
  CreditCard,
  Ban,
} from "lucide-react";

export default function SubscriptionActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card border-0 shadow-sm mt-4"
      style={{ borderRadius: "18px" }}
    >
      <div className="card-header bg-white border-0">
        <h5 className="fw-bold mb-1">
          Subscription Actions
        </h5>

        <small className="text-muted">
          Manage your subscription and billing preferences.
        </small>
      </div>

      <div className="card-body">

        <div className="row g-3">

          {/* Upgrade */}

          <div className="col-lg-3 col-md-6">

            <button className="btn btn-primary w-100 py-3">

              <ArrowUpCircle
                size={22}
                className="mb-2"
              />

              <div className="fw-semibold">
                Upgrade Plan
              </div>

            </button>

          </div>

          {/* Download Invoice */}

          <div className="col-lg-3 col-md-6">

            <button className="btn btn-outline-success w-100 py-3">

              <Download
                size={22}
                className="mb-2"
              />

              <div className="fw-semibold">
                Download Invoice
              </div>

            </button>

          </div>

          {/* Update Payment */}

          <div className="col-lg-3 col-md-6">

            <button className="btn btn-outline-warning w-100 py-3">

              <CreditCard
                size={22}
                className="mb-2"
              />

              <div className="fw-semibold">
                Update Payment
              </div>

            </button>

          </div>

          {/* Cancel */}

          <div className="col-lg-3 col-md-6">

            <button className="btn btn-outline-danger w-100 py-3">

              <Ban
                size={22}
                className="mb-2"
              />

              <div className="fw-semibold">
                Cancel Plan
              </div>

            </button>

          </div>

        </div>

        <hr className="my-4" />

        <div className="alert alert-info mb-0">

          <strong>Need help?</strong>

          <div className="small mt-1">
            Contact our billing support team anytime if you have
            questions about your subscription or invoices.
          </div>

        </div>

      </div>
    </motion.div>
  );
}