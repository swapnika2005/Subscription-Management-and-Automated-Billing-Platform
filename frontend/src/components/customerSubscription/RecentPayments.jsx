import { motion } from "framer-motion";
import {
  Download,
  CreditCard,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

export default function RecentPayments() {
  const payments = [
    {
      invoice: "INV-1001",
      date: "15 Jul 2026",
      amount: "₹999",
      method: "Visa •••• 4242",
      status: "Paid",
    },
    {
      invoice: "INV-1002",
      date: "15 Jun 2026",
      amount: "₹999",
      method: "UPI",
      status: "Paid",
    },
    {
      invoice: "INV-1003",
      date: "15 May 2026",
      amount: "₹999",
      method: "MasterCard",
      status: "Pending",
    },
    {
      invoice: "INV-1004",
      date: "15 Apr 2026",
      amount: "₹999",
      method: "Visa •••• 4242",
      status: "Failed",
    },
  ];

  const getBadge = (status) => {
    switch (status) {
      case "Paid":
        return (
          <span className="badge bg-success">
            <CheckCircle size={14} className="me-1" />
            Paid
          </span>
        );

      case "Pending":
        return (
          <span className="badge bg-warning text-dark">
            <Clock size={14} className="me-1" />
            Pending
          </span>
        );

      default:
        return (
          <span className="badge bg-danger">
            <XCircle size={14} className="me-1" />
            Failed
          </span>
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card border-0 shadow-sm mt-4"
      style={{ borderRadius: "18px" }}
    >
      <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
        <div>
          <h5 className="fw-bold mb-1">
            Recent Payments
          </h5>

          <small className="text-muted">
            Your latest subscription payments.
          </small>
        </div>

        <button className="btn btn-outline-primary btn-sm">
          View All
        </button>
      </div>

      <div className="table-responsive">

        <table className="table align-middle mb-0">

          <thead className="table-light">

            <tr>
              <th>Invoice</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th className="text-center">Receipt</th>
            </tr>

          </thead>

          <tbody>

            {payments.map((payment) => (

              <tr key={payment.invoice}>

                <td className="fw-semibold">
                  {payment.invoice}
                </td>

                <td>{payment.date}</td>

                <td className="fw-bold text-success">
                  {payment.amount}
                </td>

                <td>

                  <div className="d-flex align-items-center">

                    <CreditCard
                      size={18}
                      className="me-2 text-primary"
                    />

                    {payment.method}

                  </div>

                </td>

                <td>
                  {getBadge(payment.status)}
                </td>

                <td className="text-center">

                  <button
                    className="btn btn-outline-secondary btn-sm"
                    title="Download Invoice"
                  >
                    <Download size={16} />
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="card-footer bg-white">

        <div className="d-flex justify-content-between align-items-center">

          <small className="text-muted">
            Showing last 4 payments
          </small>

          <button className="btn btn-primary btn-sm">
            Download Payment History
          </button>

        </div>

      </div>

    </motion.div>
  );
}