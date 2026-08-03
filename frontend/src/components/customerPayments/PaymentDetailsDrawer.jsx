import {
  X,
  CreditCard,
  Calendar,
  Receipt,
  Download,
  CheckCircle,
} from "lucide-react";

export default function PaymentDetailsDrawer({
  show,
  payment,
  onClose,
}) {
  if (!show || !payment) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{
          background: "rgba(0,0,0,0.4)",
          zIndex: 1040,
        }}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className="position-fixed top-0 end-0 bg-white shadow-lg"
        style={{
          width: "430px",
          maxWidth: "100%",
          height: "100vh",
          zIndex: 1050,
          overflowY: "auto",
        }}
      >
        {/* Header */}

        <div className="border-bottom p-4 d-flex justify-content-between align-items-center">

          <div>

            <h4 className="fw-bold mb-1">
              Payment Details
            </h4>

            <small className="text-muted">
              Transaction Summary
            </small>

          </div>

          <button
            className="btn btn-light rounded-circle"
            onClick={onClose}
          >
            <X size={18} />
          </button>

        </div>

        {/* Body */}

        <div className="p-4">

          <div className="text-center mb-4">

            <div
              className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center"
              style={{
                width: 70,
                height: 70,
              }}
            >
              <CheckCircle
                size={34}
                className="text-success"
              />
            </div>

            <h3 className="fw-bold mt-3">
              ₹{payment.amount}
            </h3>

            <span className="badge bg-success">
              {payment.status}
            </span>

          </div>

          <div className="card border-0 bg-light mb-3">

            <div className="card-body">

              <div className="d-flex justify-content-between mb-3">
                <span>Invoice</span>
                <strong>{payment.invoice}</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Transaction ID</span>
                <strong>{payment.transactionId}</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Payment Date</span>
                <strong>{payment.date}</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Payment Method</span>
                <strong>{payment.method}</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Gateway</span>
                <strong>Razorpay</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>GST</span>
                <strong>₹18</strong>
              </div>

              <div className="d-flex justify-content-between">
                <span>Total Paid</span>
                <strong className="text-success">
                  ₹{payment.amount}
                </strong>
              </div>

            </div>

          </div>

          {/* Billing */}

          <div className="card border-0 shadow-sm mb-4">

            <div className="card-body">

              <h6 className="fw-bold mb-3">
                Billing Address
              </h6>

              <p className="mb-1">
                John Smith
              </p>

              <p className="mb-1">
                Bengaluru, Karnataka
              </p>

              <p className="mb-1">
                India
              </p>

              <p className="mb-0">
                GSTIN : 29ABCDE1234F1Z5
              </p>

            </div>

          </div>

          {/* Buttons */}

          <div className="d-grid gap-2">

            <button className="btn btn-primary">
              <Download size={18} className="me-2" />
              Download Receipt
            </button>

            <button className="btn btn-outline-primary">
              <Receipt size={18} className="me-2" />
              Download Invoice
            </button>

          </div>

        </div>

      </div>
    </>
  );
}