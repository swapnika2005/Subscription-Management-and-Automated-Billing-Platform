import { motion } from "framer-motion";
import {
  Eye,
  Download,
  CreditCard,
} from "lucide-react";
import PaymentStatusBadge from "./PaymentStatusBadge";

export default function PaymentTable({
  payments,
  onView,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="card border-0 shadow-sm"
      style={{ borderRadius: "18px" }}
    >
      <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center py-3">
        <div>
          <h5 className="fw-bold mb-1">
            Payment History
          </h5>

          <small className="text-muted">
            {payments.length} Payments Found
          </small>
        </div>
      </div>

      <div className="table-responsive">

        <table className="table align-middle mb-0">

          <thead className="table-light">

            <tr>
              <th>Invoice</th>
              <th>Date</th>
              <th>Method</th>
              <th>Amount</th>
              <th>Status</th>
              <th className="text-center">
                Actions
              </th>
            </tr>

          </thead>

          <tbody>

            {payments.map((payment) => (

              <tr key={payment.id}>

                {/* Invoice */}

                <td>

                  <div className="d-flex align-items-center">

                    <div
                      className="bg-primary bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: 45,
                        height: 45,
                      }}
                    >
                      <CreditCard
                        size={20}
                        className="text-primary"
                      />
                    </div>

                    <div>

                      <div className="fw-semibold">
                        {payment.invoice}
                      </div>

                      <small className="text-muted">
                        {payment.transactionId}
                      </small>

                    </div>

                  </div>

                </td>

                {/* Date */}

                <td>
                  {payment.date}
                </td>

                {/* Method */}

                <td>
                  {payment.method}
                </td>

                {/* Amount */}

                <td className="fw-bold">
                  ₹{payment.amount}
                </td>

                {/* Status */}

                <td>
                  <PaymentStatusBadge
                    status={payment.status}
                  />
                </td>

                {/* Actions */}

                <td className="text-center">

                  <div className="d-flex justify-content-center gap-2">

                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => onView(payment)}
                    >
                      <Eye size={16} />
                    </button>

                    <button
                      className="btn btn-outline-success btn-sm"
                    >
                      <Download size={16} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      <div className="card-footer bg-white d-flex justify-content-between">

        <small className="text-muted">
          Showing {payments.length} payments
        </small>

        <nav>

          <ul className="pagination pagination-sm mb-0">

            <li className="page-item disabled">
              <button className="page-link">
                Previous
              </button>
            </li>

            <li className="page-item active">
              <button className="page-link">
                1
              </button>
            </li>

            <li className="page-item disabled">
              <button className="page-link">
                Next
              </button>
            </li>

          </ul>

        </nav>

      </div>

    </motion.div>
  );
}