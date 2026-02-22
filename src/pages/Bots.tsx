import { useState } from "react";
import { Plus, Search, MoreVertical, Zap } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";

export default function Bots() {
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">My Bots</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage your Telegram bots</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <Plus className="h-4 w-4" /> Add Bot
          </button>
        </div>

        {/* Search */}
        <div className="relative max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search bots..."
            className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>

        {/* Bot grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Add bot card */}
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={() => setShowAddModal(true)}
            className="glass-card p-5 flex flex-col items-center justify-center gap-2 border-dashed hover:border-primary/40 transition-colors min-h-[160px]"
          >
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Plus className="h-5 w-5 text-primary" />
            </div>
            <span className="text-sm text-muted-foreground">Add new bot</span>
          </motion.button>
        </div>

        {/* Add Bot Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm" onClick={() => setShowAddModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card glow-border p-6 w-full max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold text-foreground mb-4">Add New Bot</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Bot Name</label>
                  <input className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="My Bot" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-1.5">Bot Token</label>
                  <input className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground font-mono focus:outline-none focus:ring-1 focus:ring-primary" placeholder="123456:ABCdefGHIjklmnop" />
                </div>
                <div className="flex gap-3 pt-2">
                  <button onClick={() => setShowAddModal(false)} className="flex-1 px-4 py-2 rounded-lg text-sm border border-border text-foreground hover:bg-muted transition-colors">
                    Cancel
                  </button>
                  <button className="flex-1 px-4 py-2 rounded-lg text-sm bg-gradient-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity">
                    Add Bot
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
