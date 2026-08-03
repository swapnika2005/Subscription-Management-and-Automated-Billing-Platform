import {
  X,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CreditCard,
  BadgeCheck,
} from "lucide-react";

export default function CustomerProfileDrawer({
  show,
  customer,
  onClose,
}) {
  if (!show || !customer) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{
          background: "rgba(0,0,0,.45)",
          zIndex: 1040,
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="position-fixed top-0 end-0 bg-white shadow-lg h-100"
        style={{
          width: "430px",
          maxWidth: "100%",
          zIndex: 1050,
          overflowY: "auto",
        }}
      >
        {/* Header */}

        <div className="p-4 border-bottom">

          <div className="d-flex justify-content-between align-items-center">

            <h4 className="fw-bold mb-0">
              Customer Profile
            </h4>

            <button
              className="btn btn-light rounded-circle"
              onClick={onClose}
            >
              <X size={18} />
            </button>

          </div>

        </div>

        {/* Avatar */}

        <div className="text-center p-4">

          <div
            className="mx-auto rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
            style={{
              width: 90,
              height: 90,
              fontSize: 36,
            }}
          >
            {customer.customer.charAt(0)}
          </div>

          <h3 className="mt-3 mb-1">
            {customer.customer}
          </h3>

          <span className="badge bg-success">
            {customer.status}
          </span>

        </div>

        {/* Information */}

        <div className="px-4">

          <div className="card border-0 shadow-sm mb-3">

            <div className="card-body">

              <h6 className="fw-bold mb-3">
                Contact
              </h6>

              <div className="mb-3 d-flex align-items-center gap-3">

                <Mail size={18} />

                <div>

                  <small className="text-muted">
                    Email
                  </small>

                  <div>{customer.email}</div>

                </div>

              </div>

              <div className="mb-3 d-flex align-items-center gap-3">

                <Phone size={18} />

                <div>

                  <small className="text-muted">
                    Phone
                  </small>

                  <div>+91 9876543210</div>

                </div>

              </div>

              <div className="d-flex align-items-center gap-3">

                <MapPin size={18} />

                <div>

                  <small className="text-muted">
                    Location
                  </small>

                  <div>Bangalore, India</div>

                </div>

              </div>

            </div>

          </div>

          {/* Subscription */}

          <div className="card border-0 shadow-sm mb-3">

            <div className="card-body">

              <h6 className="fw-bold mb-3">
                Subscription
              </h6>

              <div className="mb-3 d-flex align-items-center gap-3">

                <CreditCard size={18} />

                <div>

                  <small className="text-muted">
                    Plan
                  </small>

                  <div>{customer.plan}</div>

                </div>

              </div>

              <div className="mb-3 d-flex align-items-center gap-3">

                <BadgeCheck size={18} />

                <div>

                  <small className="text-muted">
                    Billing Cycle
                  </small>

                  <div>{customer.billingCycle}</div>

                </div>

              </div>

              <div className="d-flex align-items-center gap-3">

                <Calendar size={18} />

                <div>

                  <small className="text-muted">
                    Start Date
                  </small>

                  <div>{customer.startDate}</div>

                </div>

              </div>

            </div>

          </div>

          {/* Revenue */}

          <div className="card border-0 shadow-sm">

            <div className="card-body">

              <h6 className="fw-bold mb-3">
                Revenue
              </h6>

              <div className="row text-center">

                <div className="col">

                  <h4 className="text-primary">
                    {customer.amount}
                  </h4>

                  <small className="text-muted">
                    Monthly
                  </small>

                </div>

                <div className="col">

                  <h4 className="text-success">
                    ₹12,000
                  </h4>

                  <small className="text-muted">
                    Lifetime
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}