import { useMemo, useState } from "react";
import Layout from "../../components/Layout";

import {
  Users,
  CheckCircle2,
  Clock,
  XCircle,
  Search,
  Eye,
  X,
  Calendar,
  CreditCard,
  RefreshCw,
} from "lucide-react";

function Subscriptions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedSubscription, setSelectedSubscription] =
    useState(null);

  const subscriptions = [
    {
      id: 1,
      customer: "Alice Johnson",
      email: "alice@gmail.com",
      plan: "Pro Plan",
      price: "₹49.99",
      interval: "Monthly",
      status: "Active",
      startDate: "15 Jul 2026",
      nextBilling: "15 Aug 2026",
    },
    {
      id: 2,
      customer: "John Smith",
      email: "john@gmail.com",
      plan: "Basic Plan",
      price: "₹19.99",
      interval: "Monthly",
      status: "Active",
      startDate: "10 Jul 2026",
      nextBilling: "10 Aug 2026",
    },
    {
      id: 3,
      customer: "Emma Wilson",
      email: "emma@gmail.com",
      plan: "Enterprise Plan",
      price: "₹99.99",
      interval: "Annual",
      status: "Active",
      startDate: "08 Jul 2026",
      nextBilling: "08 Jul 2027",
    },
    {
      id: 4,
      customer: "Michael Brown",
      email: "michael@gmail.com",
      plan: "Starter",
      price: "₹9.99",
      interval: "Monthly",
      status: "Active",
      startDate: "05 Jul 2026",
      nextBilling: "05 Aug 2026",
    },
    {
      id: 5,
      customer: "Sophia Davis",
      email: "sophia@gmail.com",
      plan: "Professional",
      price: "₹29.99",
      interval: "Monthly",
      status: "Active",
      startDate: "01 Jul 2026",
      nextBilling: "01 Aug 2026",
    },
    {
      id: 6,
      customer: "Daniel Miller",
      email: "daniel@gmail.com",
      plan: "Business",
      price: "₹79.99",
      interval: "Monthly",
      status: "Pending",
      startDate: "28 Jun 2026",
      nextBilling: "28 Jul 2026",
    },
    {
      id: 7,
      customer: "Olivia Taylor",
      email: "olivia@gmail.com",
      plan: "Enterprise",
      price: "₹199.99",
      interval: "Annual",
      status: "Cancelled",
      startDate: "20 Jun 2026",
      nextBilling: "-",
    },
  ];

  const filteredSubscriptions = useMemo(() => {
    return subscriptions.filter((subscription) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        subscription.customer
          .toLowerCase()
          .includes(search) ||
        subscription.email
          .toLowerCase()
          .includes(search) ||
        subscription.plan
          .toLowerCase()
          .includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        subscription.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const activeCount = subscriptions.filter(
    (subscription) =>
      subscription.status === "Active"
  ).length;

  const pendingCount = subscriptions.filter(
    (subscription) =>
      subscription.status === "Pending"
  ).length;

  const cancelledCount = subscriptions.filter(
    (subscription) =>
      subscription.status === "Cancelled"
  ).length;

  const getStatusStyle = (status) => {
    if (status === "Active") {
      return "bg-success-subtle text-success";
    }

    if (status === "Pending") {
      return "bg-warning-subtle text-warning";
    }

    return "bg-danger-subtle text-danger";
  };

  return (
    <Layout>

      <div className="container-fluid py-4">

        {/* Header */}

        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>

            <h2 className="fw-bold mb-1">
              Subscriptions
            </h2>

            <p className="text-muted mb-0">
              Manage customer subscription plans and billing.
            </p>

          </div>

          <div className="text-end">

            <small className="text-muted">
              Total Subscriptions
            </small>

            <h5 className="fw-bold mb-0">
              {subscriptions.length}
            </h5>

          </div>

        </div>

        {/* Statistics */}

        <div className="row g-4 mb-4">

          <div className="col-xl-3 col-md-6">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body d-flex align-items-center">

                <div className="bg-primary-subtle text-primary rounded-3 p-3 me-3">

                  <Users size={25} />

                </div>

                <div>

                  <p className="text-muted mb-1">
                    Total Subscriptions
                  </p>

                  <h4 className="fw-bold mb-0">
                    {subscriptions.length}
                  </h4>

                  <small className="text-muted">
                    All customer plans
                  </small>

                </div>

              </div>

            </div>

          </div>

          <div className="col-xl-3 col-md-6">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body d-flex align-items-center">

                <div className="bg-success-subtle text-success rounded-3 p-3 me-3">

                  <CheckCircle2 size={25} />

                </div>

                <div>

                  <p className="text-muted mb-1">
                    Active
                  </p>

                  <h4 className="fw-bold mb-0">
                    {activeCount}
                  </h4>

                  <small className="text-muted">
                    Currently active
                  </small>

                </div>

              </div>

            </div>

          </div>

          <div className="col-xl-3 col-md-6">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body d-flex align-items-center">

                <div className="bg-warning-subtle text-warning rounded-3 p-3 me-3">

                  <Clock size={25} />

                </div>

                <div>

                  <p className="text-muted mb-1">
                    Pending
                  </p>

                  <h4 className="fw-bold mb-0">
                    {pendingCount}
                  </h4>

                  <small className="text-muted">
                    Awaiting activation
                  </small>

                </div>

              </div>

            </div>

          </div>

          <div className="col-xl-3 col-md-6">

            <div className="card border-0 shadow-sm rounded-4 h-100">

              <div className="card-body d-flex align-items-center">

                <div className="bg-danger-subtle text-danger rounded-3 p-3 me-3">

                  <XCircle size={25} />

                </div>

                <div>

                  <p className="text-muted mb-1">
                    Cancelled
                  </p>

                  <h4 className="fw-bold mb-0">
                    {cancelledCount}
                  </h4>

                  <small className="text-muted">
                    Cancelled subscriptions
                  </small>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Search and Filter */}

        <div className="card border-0 shadow-sm rounded-4 mb-4">

          <div className="card-body">

            <div className="row g-3">

              <div className="col-lg-8">

                <div className="input-group">

                  <span className="input-group-text bg-white border-end-0">

                    <Search size={18} />

                  </span>

                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search customer, email or subscription plan..."
                    value={searchTerm}
                    onChange={(event) =>
                      setSearchTerm(
                        event.target.value
                      )
                    }
                  />

                </div>

              </div>

              <div className="col-lg-4">

                <select
                  className="form-select"
                  value={statusFilter}
                  onChange={(event) =>
                    setStatusFilter(
                      event.target.value
                    )
                  }
                >

                  <option value="All">
                    All Subscription Status
                  </option>

                  <option value="Active">
                    Active
                  </option>

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Cancelled">
                    Cancelled
                  </option>

                </select>

              </div>

            </div>

          </div>

        </div>

        {/* Subscription Table */}

        <div className="card border-0 shadow-sm rounded-4">

          <div className="card-header bg-white border-0 pt-4 px-4">

            <div className="d-flex justify-content-between align-items-center">

              <div>

                <h5 className="fw-bold mb-1">
                  Customer Subscriptions
                </h5>

                <p className="text-muted small mb-0">

                  Showing{" "}
                  {filteredSubscriptions.length}{" "}
                  subscription records

                </p>

              </div>

              <div className="bg-primary-subtle text-primary rounded-3 p-2">

                <RefreshCw size={22} />

              </div>

            </div>

          </div>

          <div className="table-responsive">

            <table className="table align-middle mb-0">

              <thead className="table-light">

                <tr>

                  <th className="ps-4">
                    Customer
                  </th>

                  <th>
                    Subscription Plan
                  </th>

                  <th>
                    Price
                  </th>

                  <th>
                    Billing
                  </th>

                  <th>
                    Next Billing
                  </th>

                  <th>
                    Status
                  </th>

                  <th className="text-center">
                    Action
                  </th>

                </tr>

              </thead>

              <tbody>

                {filteredSubscriptions.length >
                0 ? (

                  filteredSubscriptions.map(
                    (subscription) => (

                      <tr
                        key={subscription.id}
                      >

                        <td className="ps-4">

                          <div className="fw-semibold">

                            {
                              subscription.customer
                            }

                          </div>

                          <small className="text-muted">

                            {
                              subscription.email
                            }

                          </small>

                        </td>

                        <td>

                          <span className="badge bg-primary-subtle text-primary px-3 py-2">

                            {
                              subscription.plan
                            }

                          </span>

                        </td>

                        <td className="fw-bold">

                          {
                            subscription.price
                          }

                        </td>

                        <td>

                          <span className="badge bg-light text-dark">

                            {
                              subscription.interval
                            }

                          </span>

                        </td>

                        <td>

                          {
                            subscription.nextBilling
                          }

                        </td>

                        <td>

                          <span
                            className={`badge px-3 py-2 ${getStatusStyle(
                              subscription.status
                            )}`}
                          >

                            {
                              subscription.status
                            }

                          </span>

                        </td>

                        <td className="text-center">

                          <button
                            className="btn btn-sm btn-outline-primary"
                            onClick={() =>
                              setSelectedSubscription(
                                subscription
                              )
                            }
                          >

                            <Eye size={17} />

                          </button>

                        </td>

                      </tr>

                    )
                  )

                ) : (

                  <tr>

                    <td
                      colSpan="7"
                      className="text-center py-5 text-muted"
                    >

                      No subscription records found.

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

        {/* Subscription Details Popup */}

        {selectedSubscription && (

          <div
            className="modal d-block"
            style={{
              backgroundColor:
                "rgba(0, 0, 0, 0.45)",
            }}
          >

            <div className="modal-dialog modal-dialog-centered">

              <div className="modal-content border-0 rounded-4 shadow">

                <div className="modal-header border-0">

                  <div>

                    <h5 className="fw-bold mb-1">

                      Subscription Details

                    </h5>

                    <p className="text-muted small mb-0">

                      Customer subscription information

                    </p>

                  </div>

                  <button
                    className="btn btn-light rounded-circle"
                    onClick={() =>
                      setSelectedSubscription(
                        null
                      )
                    }
                  >

                    <X size={19} />

                  </button>

                </div>

                <div className="modal-body">

                  <div className="text-center mb-4">

                    <div className="bg-primary-subtle text-primary rounded-circle d-inline-flex p-3 mb-3">

                      <CreditCard
                        size={30}
                      />

                    </div>

                    <h3 className="fw-bold">

                      {
                        selectedSubscription.price
                      }

                    </h3>

                    <p className="text-muted mb-2">

                      {
                        selectedSubscription.plan
                      }

                    </p>

                    <span
                      className={`badge px-3 py-2 ${getStatusStyle(
                        selectedSubscription.status
                      )}`}
                    >

                      {
                        selectedSubscription.status
                      }

                    </span>

                  </div>

                  <div className="row g-3">

                    <div className="col-6">

                      <p className="text-muted small mb-1">

                        Customer

                      </p>

                      <h6>

                        {
                          selectedSubscription.customer
                        }

                      </h6>

                    </div>

                    <div className="col-6">

                      <p className="text-muted small mb-1">

                        Plan

                      </p>

                      <h6>

                        {
                          selectedSubscription.plan
                        }

                      </h6>

                    </div>

                    <div className="col-6">

                      <p className="text-muted small mb-1">

                        Billing Interval

                      </p>

                      <h6>

                        {
                          selectedSubscription.interval
                        }

                      </h6>

                    </div>

                    <div className="col-6">

                      <p className="text-muted small mb-1">

                        Next Billing

                      </p>

                      <h6>

                        {
                          selectedSubscription.nextBilling
                        }

                      </h6>

                    </div>

                    <div className="col-12">

                      <p className="text-muted small mb-1">

                        Start Date

                      </p>

                      <div className="bg-light rounded-3 p-2">

                        <Calendar
                          size={16}
                          className="me-2"
                        />

                        {
                          selectedSubscription.startDate
                        }

                      </div>

                    </div>

                  </div>

                </div>

                <div className="modal-footer border-0">

                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      setSelectedSubscription(
                        null
                      )
                    }
                  >

                    Close

                  </button>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </Layout>
  );
}

export default Subscriptions;