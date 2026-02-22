import { BarChart3, TrendingUp, Users, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-sm text-muted-foreground mt-1">Track your bot performance</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Messages Today" value="0" icon={MessageSquare} />
          <StatCard title="Active Users" value="0" icon={Users} />
          <StatCard title="Commands Run" value="0" icon={BarChart3} />
          <StatCard title="Growth Rate" value="0%" icon={TrendingUp} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-5">
            <h2 className="text-sm font-semibold text-foreground mb-4">Messages This Week</h2>
            <div className="h-[240px] flex items-center justify-center text-muted-foreground text-sm">
              No data yet. Analytics will appear once your bots are active.
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-5">
            <h2 className="text-sm font-semibold text-foreground mb-4">User Growth</h2>
            <div className="h-[240px] flex items-center justify-center text-muted-foreground text-sm">
              No data yet. User growth will be tracked automatically.
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
