import { motion } from "framer-motion";
import {
  Search,
  Filter,
  RefreshCw,
  Download,
} from "lucide-react";

export default function PaymentToolbar({
  searchTerm,
  setSearchTerm,
  statusFilter,
  setStatusFilter,
  methodFilter,
  setMethodFilter,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card border-0 shadow-sm mb-4"
      style={{ borderRadius: "18px" }}
    >
      <div className="card-body">

        <div className="row g-3 align-items-center">

          {/* Search */}

          <div className="col-lg-4">

            <div className="input-group">

              <span className="input-group-text bg-white border-end-0">
                <Search size={18} />
              </span>

              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search invoice, transaction..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />

            </div>

          </div>

          {/* Status */}

          <div className="col-lg-2">

            <select
              className="form-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>

          </div>

          {/* Payment Method */}

          <div className="col-lg-2">

            <select
              className="form-select"
              value={methodFilter}
              onChange={(e) => setMethodFilter(e.target.value)}
            >
              <option value="All">All Methods</option>
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
              <option value="UPI">UPI</option>
              <option value="Net Banking">Net Banking</option>
            </select>

          </div>

          {/* Action Buttons */}

          <div className="col-lg-4">

            <div className="d-flex justify-content-end gap-2 flex-wrap">

              <button
                className="btn btn-light border"
                title="Refresh"
              >
                <RefreshCw size={18} />
              </button>

              <button
                className="btn btn-light border"
                title="Filters"
              >
                <Filter size={18} />
              </button>

              <button
                className="btn btn-primary d-flex align-items-center gap-2"
              >
                <Download size={18} />
                Export
              </button>

            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
}