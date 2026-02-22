import { useState } from "react";
import { Bot, Plus, Search, MoreVertical, Zap, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";

const mockBots = [
  { id: 1, name: "ShopBot", token: "****:AAF...xyz", status: "active", commands: 12, users: 1432, webhook: true },
  { id: 2, name: "SupportBot", token: "****:BBG...abc", status: "active", commands: 8, users: 856, webhook: true },
  { id: 3, name: "NewsBot", token: "****:CCH...def", status: "inactive", commands: 5, users: 234, webhook: false },
];

export default function Bots() {
  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const filtered = mockBots.filter((b) => b.name.toLowerCase().includes(search.toLowerCase()));

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
          {filtered.map((bot, i) => (
            <motion.div
              key={bot.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-5 hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{bot.name}</h3>
                    <p className="text-xs text-muted-foreground font-mono">{bot.token}</p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                <span>{bot.commands} commands</span>
                <span>{bot.users.toLocaleString()} users</span>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className={`text-xs px-2 py-0.5 rounded-full ${bot.status === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                  {bot.status}
                </span>
                <span className={`text-xs ${bot.webhook ? "text-success" : "text-destructive"}`}>
                  {bot.webhook ? "Webhook ✓" : "No webhook"}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Add bot card */}
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: filtered.length * 0.05 }}
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
