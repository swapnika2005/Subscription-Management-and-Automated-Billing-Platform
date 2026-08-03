import { useState, useEffect } from "react";
import { Calendar, Save, X } from "lucide-react";

export default function AddSubscriptionModal({
  show,
  onClose,
  onSave,
  subscription = null,
}) {
  const emptyForm = {
    customer: "",
    plan: "",
    billingCycle: "Monthly",
    status: "Active",
    startDate: "",
    trial: false,
    notes: "",
  };

  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (subscription) {
      setFormData({
        customer: subscription.customer || "",
        plan: subscription.plan || "",
        billingCycle: subscription.billingCycle || "Monthly",
        status: subscription.status || "Active",
        startDate: subscription.startDate || "",
        trial: subscription.trial || false,
        notes: subscription.notes || "",
      });
    } else {
      setFormData(emptyForm);
    }
  }, [subscription]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.customer ||
      !formData.plan ||
      !formData.startDate
    ) {
      alert("Please fill all required fields.");
      return;
    }

    onSave(formData);

    setFormData(emptyForm);

    if (onClose) {
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{
        backgroundColor: "rgba(0,0,0,.45)",
      }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">

        <div
          className="modal-content border-0 shadow-lg"
          style={{
            borderRadius: "20px",
          }}
        >

          {/* Header */}

          <div className="modal-header border-0 pb-0">

            <div>

              <h4 className="fw-bold mb-1">
                {subscription
                  ? "Edit Subscription"
                  : "Add Subscription"}
              </h4>

              <small className="text-muted">
                {subscription
                  ? "Update subscription information."
                  : "Create a new customer subscription."}
              </small>

            </div>

            <button
              className="btn btn-light rounded-circle"
              onClick={onClose}
            >
              <X size={18} />
            </button>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="modal-body">

              <div className="row g-3">

                {/* Customer */}

                <div className="col-md-6">

                  <label className="form-label fw-semibold">
                    Customer *
                  </label>

                  <select
                    className="form-select"
                    name="customer"
                    value={formData.customer}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select Customer
                    </option>

                    <option>Alice Johnson</option>

                    <option>John Smith</option>

                    <option>David Brown</option>

                  </select>

                </div>

                {/* Plan */}

                <div className="col-md-6">

                  <label className="form-label fw-semibold">
                    Plan *
                  </label>

                  <select
                    className="form-select"
                    name="plan"
                    value={formData.plan}
                    onChange={handleChange}
                  >
                    <option value="">
                      Select Plan
                    </option>

                    <option>Basic</option>

                    <option>Premium</option>

                    <option>Enterprise</option>

                  </select>

                </div>

                {/* Billing Cycle */}

                <div className="col-md-6">

                  <label className="form-label fw-semibold">
                    Billing Cycle
                  </label>

                  <select
                    className="form-select"
                    name="billingCycle"
                    value={formData.billingCycle}
                    onChange={handleChange}
                  >
                    <option>Monthly</option>

                    <option>Quarterly</option>

                    <option>Yearly</option>

                  </select>

                </div>

                {/* Status */}

                <div className="col-md-6">

                  <label className="form-label fw-semibold">
                    Status
                  </label>

                  <select
                    className="form-select"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                  >
                    <option>Active</option>

                    <option>Trial</option>

                    <option>Past Due</option>

                    <option>Cancelled</option>

                  </select>

                </div>

                {/* Start Date */}

                <div className="col-md-6">

                  <label className="form-label fw-semibold">
                    Start Date *
                  </label>

                  <div className="input-group">

                    <span className="input-group-text">
                      <Calendar size={18} />
                    </span>

                    <input
                      type="date"
                      className="form-control"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleChange}
                    />

                  </div>

                </div>

                {/* Trial */}

                <div className="col-md-6 d-flex align-items-end">

                  <div className="form-check form-switch">

                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="trial"
                      checked={formData.trial}
                      onChange={handleChange}
                    />

                    <label className="form-check-label">
                      Enable Free Trial
                    </label>

                  </div>

                </div>

                {/* Notes */}

                <div className="col-12">

                  <label className="form-label fw-semibold">
                    Notes
                  </label>

                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write additional notes..."
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                  />

                </div>

              </div>

            </div>

            {/* Footer */}

            <div className="modal-footer border-0">

              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="btn btn-primary d-flex align-items-center gap-2"
              >
                <Save size={18} />

                {subscription
                  ? "Update Subscription"
                  : "Save Subscription"}
              </button>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
}