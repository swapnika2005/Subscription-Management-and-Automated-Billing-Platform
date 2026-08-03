import { useState } from "react";
import {
  CreditCard,
  Clock,
  XCircle,
  Calendar,
} from "lucide-react";

import PaymentStats from "../../components/customerPayments/PaymentStats";
import PaymentToolbar from "../../components/customerPayments/PaymentToolbar";
import PaymentTable from "../../components/customerPayments/PaymentTable";
import PaymentDetailsDrawer from "../../components/customerPayments/PaymentDetailsDrawer";

export default function MyPayments() {
  const stats = [
    {
      title: "Total Paid",
      value: "₹24,500",
      subtitle: "Lifetime payments",
      icon: CreditCard,
      color: "success",
    },
    {
      title: "Pending",
      value: "₹999",
      subtitle: "Awaiting payment",
      icon: Clock,
      color: "warning",
    },
    {
      title: "Failed",
      value: "₹0",
      subtitle: "No failed payments",
      icon: XCircle,
      color: "danger",
    },
    {
      title: "Next Due",
      value: "15 Aug",
      subtitle: "Upcoming renewal",
      icon: Calendar,
      color: "primary",
    },
  ];

  const [payments] = useState([
    {
      id: 1,
      invoice: "INV-1001",
      transactionId: "TXN98456231",
      date: "15 Jul 2026",
      amount: 999,
      method: "Visa",
      status: "Paid",
    },
    {
      id: 2,
      invoice: "INV-1002",
      transactionId: "TXN98456232",
      date: "15 Jun 2026",
      amount: 999,
      method: "UPI",
      status: "Paid",
    },
    {
      id: 3,
      invoice: "INV-1003",
      transactionId: "TXN98456233",
      date: "15 May 2026",
      amount: 999,
      method: "MasterCard",
      status: "Pending",
    },
    {
      id: 4,
      invoice: "INV-1004",
      transactionId: "TXN98456234",
      date: "15 Apr 2026",
      amount: 999,
      method: "Net Banking",
      status: "Failed",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [methodFilter, setMethodFilter] = useState("All");

  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.invoice.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.transactionId.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || payment.status === statusFilter;

    const matchesMethod =
      methodFilter === "All" || payment.method === methodFilter;

    return matchesSearch && matchesStatus && matchesMethod;
  });

  const handleView = (payment) => {
    setSelectedPayment(payment);
    setShowDrawer(true);
  };

  return (
    <div className="container-fluid py-4">
      {/* Header */}
      <div className="mb-4">
        <h2 className="fw-bold">My Payments</h2>
        <p className="text-muted">
          View your payment history and invoices.
        </p>
      </div>

      {/* Stats */}
      <div className="row g-4 mb-4">
        {stats.map((item, index) => (
          <div className="col-xl-3 col-md-6" key={index}>
            <PaymentStats {...item} />
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <PaymentToolbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        methodFilter={methodFilter}
        setMethodFilter={setMethodFilter}
      />

      {/* Table */}
      <PaymentTable
        payments={filteredPayments}
        onView={handleView}
      />

      {/* Drawer */}
      <PaymentDetailsDrawer
        show={showDrawer}
        payment={selectedPayment}
        onClose={() => {
          setShowDrawer(false);
          setSelectedPayment(null);
        }}
      />
    </div>
  );
}