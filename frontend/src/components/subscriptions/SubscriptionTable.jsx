import { motion } from "framer-motion";
import {
  Mail,
  MoreVertical,
  Eye,
  Pencil,
  Trash2,
  Ban,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

function PlanBadge({ plan }) {
  const colors = {
    Basic: "secondary",
    Premium: "primary",
    Enterprise: "dark",
  };

  return (
    <span className={`badge bg-${colors[plan] || "secondary"} px-3 py-2`}>
      {plan}
    </span>
  );
}

export default function SubscriptionTable({
  subscriptions,
  onEdit,
  onDelete,
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
          <h5 className="mb-1 fw-bold">Subscriptions</h5>
          <small className="text-muted">
            Showing {subscriptions.length} subscriptions
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

              <th>Customer</th>

              <th>Plan</th>

              <th>Status</th>

              <th>MRR</th>

              <th>Next Billing</th>

              <th>Created</th>

              <th className="text-center">Actions</th>

            </tr>

          </thead>

          <tbody>

            {subscriptions.map((sub) => (

              <tr
                key={sub.id}
                className="align-middle"
              >

                {/* Customer */}

                <td>

                  <div className="d-flex align-items-center">

                    <div
                      className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center fw-bold me-3"
                      style={{
                        width: 46,
                        height: 46,
                        fontSize: 18,
                      }}
                    >
                      {sub.customer.charAt(0)}
                    </div>

                    <div>

                      <div className="fw-semibold">
                        {sub.customer}
                      </div>

                      <small className="text-muted d-flex align-items-center gap-1">
                        <Mail size={14} />
                        {sub.email}
                      </small>

                    </div>

                  </div>

                </td>

                {/* Plan */}

                <td>
                  <PlanBadge plan={sub.plan} />
                </td>

                {/* Status */}

                <td>
                  <StatusBadge status={sub.status} />
                </td>

                {/* MRR */}

                <td className="fw-semibold">
                  {sub.amount}
                </td>

                {/* Billing */}

                <td>{sub.billing}</td>

                {/* Created */}

                <td>{sub.created}</td>

                {/* Actions */}

<td className="text-center">

  <div className="dropdown">

    <button
      className="btn btn-light btn-sm"
      data-bs-toggle="dropdown"
    >
      <MoreVertical size={18} />
    </button>

    <ul className="dropdown-menu dropdown-menu-end shadow">

      {/* View */}

      <li>
        <button
          className="dropdown-item d-flex align-items-center gap-2"
          onClick={() => onView(sub)}
        >
          <Eye size={16} />
          View
        </button>
      </li>

      {/* Edit */}

      <li>
        <button
          className="dropdown-item d-flex align-items-center gap-2"
          onClick={() => onEdit(sub)}
        >
          <Pencil size={16} />
          Edit
        </button>
      </li>

      {/* Cancel */}

      <li>
        <button
          className="dropdown-item d-flex align-items-center gap-2"
          onClick={() =>
            alert("Cancel Subscription feature coming soon")
          }
        >
          <Ban size={16} />
          Cancel
        </button>
      </li>

      <li>
        <hr className="dropdown-divider" />
      </li>

      {/* Delete */}

      <li>
        <button
          className="dropdown-item text-danger d-flex align-items-center gap-2"
          onClick={() => onDelete(sub)}
        >
          <Trash2 size={16} />
          Delete
        </button>
      </li>

    </ul>

  </div>

</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <div className="card-footer bg-white d-flex justify-content-between align-items-center">
      ...
    </div>
  </motion.div>
);
}