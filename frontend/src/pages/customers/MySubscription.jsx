import {
  CheckCircle2,
  Calendar,
  CreditCard,
  RefreshCw,
  Crown,
} from "lucide-react";

function MySubscription() {
  const subscription = {
    plan: "Pro Plan",
    price: "₹49.99",
    interval: "Monthly",
    status: "Active",
    startDate: "15 Jul 2026",
    nextBilling: "15 Aug 2026",
    description:
      "Professional subscription with advanced features",
  };

  return (
    <div className="container-fluid py-4">

      {/* Header */}

      <div className="mb-4">

        <h2 className="fw-bold mb-1">
          My Subscription
        </h2>

        <p className="text-muted">
          View and manage your current subscription plan.
        </p>

      </div>

      {/* Current subscription */}

      <div className="card border-0 shadow-sm rounded-4 mb-4">

        <div className="card-body p-4">

          <div className="d-flex justify-content-between align-items-start">

            <div>

              <div className="d-flex align-items-center mb-2">

                <Crown
                  size={21}
                  className="text-primary me-2"
                />

                <h5 className="fw-bold mb-0">

                  Current Subscription

                </h5>

              </div>

              <p className="text-muted mb-0">

                Your active subscription details

              </p>

            </div>

            <span className="badge bg-success-subtle text-success px-3 py-2">

              <CheckCircle2
                size={15}
                className="me-1"
              />

              {subscription.status}

            </span>

          </div>

          <hr className="my-4" />

          <div className="row g-4">

            {/* Plan */}

            <div className="col-lg-3 col-md-6">

              <p className="text-muted small mb-1">

                Current Plan

              </p>

              <h4 className="fw-bold">

                {subscription.plan}

              </h4>

            </div>

            {/* Price */}

            <div className="col-lg-3 col-md-6">

              <p className="text-muted small mb-1">

                Subscription Price

              </p>

              <h4 className="fw-bold text-primary">

                {subscription.price}

              </h4>

              <small className="text-muted">

                / {subscription.interval}

              </small>

            </div>

            {/* Next billing */}

            <div className="col-lg-3 col-md-6">

              <p className="text-muted small mb-1">

                Next Billing

              </p>

              <h5 className="fw-bold">

                {subscription.nextBilling}

              </h5>

            </div>

            {/* Status */}

            <div className="col-lg-3 col-md-6">

              <p className="text-muted small mb-1">

                Subscription Status

              </p>

              <span className="badge bg-success px-3 py-2">

                {subscription.status}

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Subscription information */}

      <div className="row g-4">

        <div className="col-lg-8">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <h5 className="fw-bold mb-4">

                Plan Information

              </h5>

              <div className="row g-4">

                <div className="col-md-6">

                  <div className="bg-light rounded-4 p-3">

                    <CreditCard
                      size={21}
                      className="text-primary mb-2"
                    />

                    <p className="text-muted small mb-1">

                      Plan

                    </p>

                    <h6 className="fw-bold mb-0">

                      {subscription.plan}

                    </h6>

                  </div>

                </div>

                <div className="col-md-6">

                  <div className="bg-light rounded-4 p-3">

                    <RefreshCw
                      size={21}
                      className="text-primary mb-2"
                    />

                    <p className="text-muted small mb-1">

                      Billing Cycle

                    </p>

                    <h6 className="fw-bold mb-0">

                      {subscription.interval}

                    </h6>

                  </div>

                </div>

                <div className="col-md-6">

                  <div className="bg-light rounded-4 p-3">

                    <Calendar
                      size={21}
                      className="text-primary mb-2"
                    />

                    <p className="text-muted small mb-1">

                      Started On

                    </p>

                    <h6 className="fw-bold mb-0">

                      {subscription.startDate}

                    </h6>

                  </div>

                </div>

                <div className="col-md-6">

                  <div className="bg-light rounded-4 p-3">

                    <Calendar
                      size={21}
                      className="text-primary mb-2"
                    />

                    <p className="text-muted small mb-1">

                      Next Renewal

                    </p>

                    <h6 className="fw-bold mb-0">

                      {subscription.nextBilling}

                    </h6>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Plan description */}

        <div className="col-lg-4">

          <div className="card border-0 shadow-sm rounded-4 h-100">

            <div className="card-body p-4">

              <h5 className="fw-bold mb-3">

                About Your Plan

              </h5>

              <p className="text-muted">

                {subscription.description}

              </p>

              <hr />

              <p className="text-muted small">

                Your subscription will renew automatically on:

              </p>

              <h6 className="fw-bold text-primary">

                {subscription.nextBilling}

              </h6>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default MySubscription;