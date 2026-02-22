import { useState } from "react";
import { Send, Users, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";

export default function Broadcasts() {
  const [message, setMessage] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Broadcasts</h1>
          <p className="text-sm text-muted-foreground mt-1">Send messages to all bot users</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Compose */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-2 glass-card p-5 space-y-4">
            <h2 className="text-sm font-semibold text-foreground">New Broadcast</h2>
            <div>
              <label className="text-xs text-muted-foreground block mb-1.5">Select Bot</label>
              <select className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="">No bots available</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1.5">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                placeholder="Type your broadcast message... Supports Markdown."
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-muted-foreground">{message.length} characters</p>
              <button className="flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                <Send className="h-4 w-4" /> Send Broadcast
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-5 space-y-4">
            <h2 className="text-sm font-semibold text-foreground">Quick Stats</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                <div className="flex items-center gap-2 text-sm text-foreground"><Users className="h-4 w-4 text-primary" /> Total Reach</div>
                <span className="text-sm font-semibold text-foreground">0</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                <div className="flex items-center gap-2 text-sm text-foreground"><CheckCircle2 className="h-4 w-4 text-success" /> Delivered</div>
                <span className="text-sm font-semibold text-foreground">0</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-muted">
                <div className="flex items-center gap-2 text-sm text-foreground"><XCircle className="h-4 w-4 text-destructive" /> Failed</div>
                <span className="text-sm font-semibold text-foreground">0</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* History */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card">
          <div className="p-4 border-b border-border">
            <h2 className="text-sm font-semibold text-foreground">Broadcast History</h2>
          </div>
          <div className="p-8 text-center text-muted-foreground text-sm">
            No broadcasts sent yet.
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
