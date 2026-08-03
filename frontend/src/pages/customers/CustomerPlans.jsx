import { useState } from "react";
import {
  Check,
  CreditCard,
  Calendar,
  Crown,
} from "lucide-react";

function CustomerPlans() {
  const [selectedPlan, setSelectedPlan] =
    useState("Pro Plan");

  const plans = [
    {
      id: 1,
      name: "Basic Plan",
      price: "₹19.99",
      interval: "Monthly",
      description:
        "Basic subscription plan for individuals",
      features: [
        "Basic dashboard",
        "Monthly billing",
        "Email support",
      ],
    },
    {
      id: 2,
      name: "Pro Plan",
      price: "₹49.99",
      interval: "Monthly",
      description:
        "Professional subscription with advanced features",
      features: [
        "Advanced dashboard",
        "Priority support",
        "Detailed reports",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise Plan",
      price: "₹99.99",
      interval: "Annual",
      description:
        "Enterprise annual subscription for large organizations",
      features: [
        "Enterprise dashboard",
        "Advanced analytics",
        "Priority support",
      ],
    },
    {
      id: 4,
      name: "Starter",
      price: "₹9.99",
      interval: "Monthly",
      description:
        "Starter plan for beginners",
      features: [
        "Basic access",
        "Monthly billing",
        "Email support",
      ],
    },
    {
      id: 5,
      name: "Professional",
      price: "₹29.99",
      interval: "Monthly",
      description:
        "Professional plan for growing businesses",
      features: [
        "Professional tools",
        "Reports",
        "Priority support",
      ],
    },
    {
      id: 6,
      name: "Business",
      price: "₹79.99",
      interval: "Monthly",
      description:
        "Business plan with team collaboration",
      features: [
        "Team collaboration",
        "Business analytics",
        "Priority support",
      ],
    },
    {
      id: 7,
      name: "Enterprise",
      price: "₹199.99",
      interval: "Annual",
      description:
        "Enterprise plan with unlimited resources",
      features: [
        "Unlimited resources",
        "Advanced analytics",
        "Dedicated support",
      ],
    },
  ];

  const choosePlan = (planName) => {
    setSelectedPlan(planName);
  };

  return (
    <div className="container-fluid py-4">

      {/* Header */}

      <div className="mb-4">

        <h2 className="fw-bold mb-1">
          Choose Your Perfect Plan
        </h2>

        <p className="text-muted">
          Upgrade or switch your subscription anytime.
        </p>

      </div>

      {/* Plan count */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h5 className="fw-bold mb-0">
          {plans.length} Available Plans
        </h5>

        <span className="badge bg-primary-subtle text-primary px-3 py-2">
          <CreditCard
            size={15}
            className="me-1"
          />

          Subscription Plans
        </span>

      </div>

      {/* Plans */}

      <div className="row g-4">

        {plans.map((plan) => (

          <div
            className="col-xl-4 col-lg-6"
            key={plan.id}
          >

            <div
              className={`card border-0 shadow-sm rounded-4 h-100 ${
                selectedPlan === plan.name
                  ? "border border-primary"
                  : ""
              }`}
            >

              <div className="card-body p-4">

                {/* Popular */}

                {plan.popular && (

                  <div className="text-end">

                    <span className="badge bg-primary">

                      <Crown
                        size={13}
                        className="me-1"
                      />

                      Most Popular

                    </span>

                  </div>

                )}

                {/* Plan name */}

                <div className="text-center mb-4">

                  <div className="bg-primary-subtle text-primary rounded-circle d-inline-flex p-3 mb-3">

                    <CreditCard size={25} />

                  </div>

                  <h4 className="fw-bold">
                    {plan.name}
                  </h4>

                  <h2 className="fw-bold text-primary mb-1">

                    {plan.price}

                  </h2>

                  <small className="text-muted">

                    / {plan.interval}

                  </small>

                </div>

                <hr />

                {/* Description */}

                <p className="text-muted">

                  {plan.description}

                </p>

                {/* Features */}

                <div className="mb-4">

                  {plan.features.map(
                    (feature, index) => (

                      <div
                        className="d-flex align-items-center mb-2"
                        key={index}
                      >

                        <Check
                          size={17}
                          className="text-success me-2"
                        />

                        <span>
                          {feature}
                        </span>

                      </div>

                    )
                  )}

                </div>

                {/* Billing */}

                <div className="bg-light rounded-3 p-3 mb-3">

                  <Calendar
                    size={16}
                    className="me-2 text-primary"
                  />

                  <small>

                    Billed {plan.interval.toLowerCase()}

                  </small>

                </div>

                {/* Button */}

                <button
                  className={`btn w-100 ${
                    selectedPlan === plan.name
                      ? "btn-success"
                      : "btn-primary"
                  }`}
                  onClick={() =>
                    choosePlan(plan.name)
                  }
                >

                  {selectedPlan === plan.name
                    ? "Current Plan"
                    : "Choose Plan"}

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default CustomerPlans;