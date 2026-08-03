import { useMemo, useState } from "react";
import Layout from "../../components/Layout";
import {
  CreditCard,
  Clock,
  CheckCircle2,
  XCircle,
  Search,
  Eye,
  X,
  Calendar,
  Receipt,
  Wallet,
} from "lucide-react";

function Payments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedPayment, setSelectedPayment] = useState(null);

  const payments = [
    {
      id: 1,
      customer: "Alice Johnson",
      email: "alice@gmail.com",
      invoice: "INV-2026-001",
      plan: "Pro Plan",
      amount: "₹49.99",
      method: "UPI",
      status: "Paid",
      date: "15 Jul 2026",
      transactionId: "TXN98456231",
    },
    {
      id: 2,
      customer: "John Smith",
      email: "john@gmail.com",
      invoice: "INV-2026-002",
      plan: "Basic Plan",
      amount: "₹19.99",
      method: "Visa",
      status: "Paid",
      date: "10 Jul 2026",
      transactionId: "TXN98456232",
    },
    {
      id: 3,
      customer: "Emma Wilson",
      email: "emma@gmail.com",
      invoice: "INV-2026-003",
      plan: "Enterprise Plan",
      amount: "₹99.99",
      method: "Net Banking",
      status: "Pending",
      date: "08 Jul 2026",
      transactionId: "TXN98456233",
    },
    {
      id: 4,
      customer: "Michael Brown",
      email: "michael@gmail.com",
      invoice: "INV-2026-004",
      plan: "Starter",
      amount: "₹9.99",
      method: "UPI",
      status: "Paid",
      date: "05 Jul 2026",
      transactionId: "TXN98456234",
    },
    {
      id: 5,
      customer: "Sophia Davis",
      email: "sophia@gmail.com",
      invoice: "INV-2026-005",
      plan: "Professional",
      amount: "₹29.99",
      method: "MasterCard",
      status: "Paid",
      date: "01 Jul 2026",
      transactionId: "TXN98456235",
    },
    {
      id: 6,
      customer: "Daniel Miller",
      email: "daniel@gmail.com",
      invoice: "INV-2026-006",
      plan: "Business",
      amount: "₹79.99",
      method: "Visa",
      status: "Failed",
      date: "28 Jun 2026",
      transactionId: "TXN98456236",
    },
    {
      id: 7,
      customer: "Olivia Taylor",
      email: "olivia@gmail.com",
      invoice: "INV-2026-007",
      plan: "Enterprise",
      amount: "₹199.99",
      method: "Net Banking",
      status: "Paid",
      date: "20 Jun 2026",
      transactionId: "TXN98456237",
    },
  ];

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch =
        payment.customer.toLowerCase().includes(search) ||
        payment.email.toLowerCase().includes(search) ||
        payment.invoice.toLowerCase().includes(search) ||
        payment.plan.toLowerCase().includes(search) ||
        payment.transactionId.toLowerCase().includes(search);

      const matchesStatus =
        statusFilter === "All" ||
        payment.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const totalPaid = payments
    .filter((payment) => payment.status === "Paid")
    .reduce(
      (total, payment) =>
        total + Number(payment.amount.replace("₹", "")),
      0
    );

  const pendingAmount = payments
    .filter((payment) => payment.status === "Pending")
    .reduce(
      (total, payment) =>
        total + Number(payment.amount.replace("₹", "")),
      0
    );

  const paidCount = payments.filter(
    (payment) => payment.status === "Paid"
  ).length;

  const failedCount = payments.filter(
    (payment) => payment.status === "Failed"
  ).length;

  const getStatusBadge = (status) => {
    if (status === "Paid") {
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
              Payments
            </h2>

            <p className="text-muted mb-0">
              Manage and monitor all customer payment records.
            </p>
          </div>

          <div className="text-end">
            <small className="text-muted">
              Total Records
            </small>

            <h5 className="fw-bold mb-0">
              {payments.length} Payments
            </h5>
          </div>
        </div>

        {/* Statistics */}

        <div className="row g-4 mb-4">

          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm h-100 rounded-4">
              <div className="card-body d-flex align-items-center">

                <div className="bg-success-subtle text-success rounded-3 p-3 me-3">
                  <Wallet size={25} />
                </div>

                <div>
                  <p className="text-muted mb-1">
                    Total Revenue
                  </p>

                  <h4 className="fw-bold mb-0">
                    ₹{totalPaid.toFixed(2)}
                  </h4>

                  <small className="text-success">
                    Successful payments
                  </small>
                </div>

              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm h-100 rounded-4">
              <div className="card-body d-flex align-items-center">

                <div className="bg-primary-subtle text-primary rounded-3 p-3 me-3">
                  <CheckCircle2 size={25} />
                </div>

                <div>
                  <p className="text-muted mb-1">
                    Successful
                  </p>

                  <h4 className="fw-bold mb-0">
                    {paidCount}
                  </h4>

                  <small className="text-muted">
                    Payments completed
                  </small>
                </div>

              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm h-100 rounded-4">
              <div className="card-body d-flex align-items-center">

                <div className="bg-warning-subtle text-warning rounded-3 p-3 me-3">
                  <Clock size={25} />
                </div>

                <div>
                  <p className="text-muted mb-1">
                    Pending Amount
                  </p>

                  <h4 className="fw-bold mb-0">
                    ₹{pendingAmount.toFixed(2)}
                  </h4>

                  <small className="text-muted">
                    Awaiting payment
                  </small>
                </div>

              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="card border-0 shadow-sm h-100 rounded-4">
              <div className="card-body d-flex align-items-center">

                <div className="bg-danger-subtle text-danger rounded-3 p-3 me-3">
                  <XCircle size={25} />
                </div>

                <div>
                  <p className="text-muted mb-1">
                    Failed
                  </p>

                  <h4 className="fw-bold mb-0">
                    {failedCount}
                  </h4>

                  <small className="text-muted">
                    Failed transactions
                  </small>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Search and Filter */}

        <div className="card border-0 shadow-sm rounded-4 mb-4">
          <div className="card-body">

            <div className="row g-3 align-items-center">

              <div className="col-lg-8">
                <div className="input-group">

                  <span className="input-group-text bg-white border-end-0">
                    <Search size={18} />
                  </span>

                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search customer, invoice, plan or transaction ID..."
                    value={searchTerm}
                    onChange={(event) =>
                      setSearchTerm(event.target.value)
                    }
                  />

                </div>
              </div>

              <div className="col-lg-4">
                <select
                  className="form-select"
                  value={statusFilter}
                  onChange={(event) =>
                    setStatusFilter(event.target.value)
                  }
                >
                  <option value="All">
                    All Payment Status
                  </option>

                  <option value="Paid">
                    Paid
                  </option>

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="Failed">
                    Failed
                  </option>
                </select>
              </div>

            </div>

          </div>
        </div>

        {/* Payment Table */}

        <div className="card border-0 shadow-sm rounded-4">

          <div className="card-header bg-white border-0 pt-4 px-4">

            <div className="d-flex justify-content-between align-items-center">

              <div>
                <h5 className="fw-bold mb-1">
                  Payment Records
                </h5>

                <p className="text-muted small mb-0">
                  Showing {filteredPayments.length} payment records
                </p>
              </div>

              <div className="bg-primary-subtle text-primary rounded-3 p-2">
                <CreditCard size={22} />
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
                    Invoice
                  </th>

                  <th>
                    Subscription Plan
                  </th>

                  <th>
                    Amount
                  </th>

                  <th>
                    Payment Method
                  </th>

                  <th>
                    Date
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

                {filteredPayments.length > 0 ? (

                  filteredPayments.map((payment) => (

                    <tr key={payment.id}>

                      <td className="ps-4">

                        <div className="fw-semibold">
                          {payment.customer}
                        </div>

                        <small className="text-muted">
                          {payment.email}
                        </small>

                      </td>

                      <td>

                        <div className="fw-semibold">
                          {payment.invoice}
                        </div>

                        <small className="text-muted">
                          {payment.transactionId}
                        </small>

                      </td>

                      <td>
                        <span className="badge bg-primary-subtle text-primary px-3 py-2">
                          {payment.plan}
                        </span>
                      </td>

                      <td className="fw-bold">
                        {payment.amount}
                      </td>

                      <td>
                        {payment.method}
                      </td>

                      <td>
                        {payment.date}
                      </td>

                      <td>

                        <span
                          className={`badge px-3 py-2 ${getStatusBadge(
                            payment.status
                          )}`}
                        >
                          {payment.status}
                        </span>

                      </td>

                      <td className="text-center">

                        <button
                          className="btn btn-sm btn-outline-primary"
                          onClick={() =>
                            setSelectedPayment(payment)
                          }
                          title="View payment details"
                        >
                          <Eye size={17} />
                        </button>

                      </td>

                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="8"
                      className="text-center py-5 text-muted"
                    >
                      No payment records found.
                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

        {/* Payment Details Modal */}

        {selectedPayment && (

          <div
            className="modal d-block"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.45)",
            }}
          >

            <div className="modal-dialog modal-dialog-centered">

              <div className="modal-content border-0 rounded-4 shadow">

                <div className="modal-header border-0">

                  <div>

                    <h5 className="fw-bold mb-1">
                      Payment Details
                    </h5>

                    <p className="text-muted small mb-0">
                      {selectedPayment.invoice}
                    </p>

                  </div>

                  <button
                    className="btn btn-light rounded-circle"
                    onClick={() =>
                      setSelectedPayment(null)
                    }
                  >
                    <X size={19} />
                  </button>

                </div>

                <div className="modal-body">

                  <div className="text-center mb-4">

                    <div className="bg-primary-subtle text-primary rounded-circle d-inline-flex p-3 mb-3">
                      <Receipt size={30} />
                    </div>

                    <h3 className="fw-bold">
                      {selectedPayment.amount}
                    </h3>

                    <span
                      className={`badge px-3 py-2 ${getStatusBadge(
                        selectedPayment.status
                      )}`}
                    >
                      {selectedPayment.status}
                    </span>

                  </div>

                  <div className="row g-3">

                    <div className="col-6">

                      <p className="text-muted small mb-1">
                        Customer
                      </p>

                      <h6>
                        {selectedPayment.customer}
                      </h6>

                    </div>

                    <div className="col-6">

                      <p className="text-muted small mb-1">
                        Subscription Plan
                      </p>

                      <h6>
                        {selectedPayment.plan}
                      </h6>

                    </div>

                    <div className="col-6">

                      <p className="text-muted small mb-1">
                        Payment Method
                      </p>

                      <h6>
                        {selectedPayment.method}
                      </h6>

                    </div>

                    <div className="col-6">

                      <p className="text-muted small mb-1">
                        Payment Date
                      </p>

                      <h6>
                        {selectedPayment.date}
                      </h6>

                    </div>

                    <div className="col-12">

                      <p className="text-muted small mb-1">
                        Transaction ID
                      </p>

                      <div className="bg-light rounded-3 p-2">
                        {selectedPayment.transactionId}
                      </div>

                    </div>

                  </div>

                </div>

                <div className="modal-footer border-0">

                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      setSelectedPayment(null)
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

export default Payments;