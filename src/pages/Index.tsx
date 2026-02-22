import { Bot, Users, Send, Activity, Zap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
import DashboardLayout from "@/components/DashboardLayout";

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">Overview of your bot platform</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Total Bots" value={0} icon={Bot} />
          <StatCard title="Total Users" value="0" icon={Users} />
          <StatCard title="Messages Sent" value="0" icon={Send} />
          <StatCard title="Uptime" value="—" icon={Activity} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Bots */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-sm font-semibold text-foreground">Your Bots</h2>
              <a href="/bots" className="text-xs text-primary flex items-center gap-1 hover:underline">View all <ArrowUpRight className="h-3 w-3" /></a>
            </div>
            <div className="p-8 text-center text-muted-foreground text-sm">
              No bots yet. Add your first bot to get started.
            </div>
          </motion.div>

          {/* Recent logs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-sm font-semibold text-foreground">Recent Logs</h2>
              <a href="/logs" className="text-xs text-primary flex items-center gap-1 hover:underline">View all <ArrowUpRight className="h-3 w-3" /></a>
            </div>
            <div className="p-8 text-center text-muted-foreground text-sm">
              No logs yet. Logs will appear once your bots are active.
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
