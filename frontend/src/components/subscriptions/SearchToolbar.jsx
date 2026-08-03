import { motion } from "framer-motion";
import {
  Search,
  Filter,
  RefreshCw,
  Download,
  Plus,
} from "lucide-react";

export default function SearchToolbar({
  search,
  setSearch,
  status,
  setStatus,
  plan,
  setPlan,
  billing,
  setBilling,
  onReset,
  onAdd,
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
              <span className="input-group-text bg-white">
                <Search size={18} />
              </span>

              <input
                type="text"
                className="form-control"
                placeholder="Search customer, email or plan..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Status */}

          <div className="col-lg-2">
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Trial">Trial</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          {/* Plan */}

          <div className="col-lg-2">
            <select
              className="form-select"
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
            >
              <option value="">All Plans</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          {/* Billing */}

          <div className="col-lg-2">
            <select
              className="form-select"
              value={billing}
              onChange={(e) => setBilling(e.target.value)}
            >
              <option value="">Billing Cycle</option>
              <option value="Monthly">Monthly</option>
              <option value="Quarterly">Quarterly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>

          {/* Buttons */}

          <div className="col-lg-2">
            <div className="d-flex justify-content-end gap-2">

              <button
                className="btn btn-light border"
                onClick={onReset}
                title="Reset"
              >
                <RefreshCw size={18} />
              </button>

              <button
                className="btn btn-light border"
                title="Filter"
              >
                <Filter size={18} />
              </button>

              <button
                className="btn btn-light border"
                title="Export"
              >
                <Download size={18} />
              </button>

              <button
                className="btn btn-primary d-flex align-items-center gap-2"
                onClick={onAdd}
              >
                <Plus size={18} />
                New
              </button>

            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}