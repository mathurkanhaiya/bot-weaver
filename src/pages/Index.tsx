import { Bot, Users, Send, Activity, Zap, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
import DashboardLayout from "@/components/DashboardLayout";

const recentBots = [
  { name: "ShopBot", status: "active", commands: 12, users: 1432 },
  { name: "SupportBot", status: "active", commands: 8, users: 856 },
  { name: "NewsBot", status: "inactive", commands: 5, users: 234 },
];

const recentLogs = [
  { time: "2 min ago", bot: "ShopBot", event: "/start command triggered", type: "info" },
  { time: "5 min ago", bot: "SupportBot", event: "Broadcast sent to 856 users", type: "success" },
  { time: "12 min ago", bot: "ShopBot", event: "Webhook updated", type: "info" },
  { time: "1 hr ago", bot: "NewsBot", event: "Error in /fetch handler", type: "error" },
];

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
          <StatCard title="Total Bots" value={3} icon={Bot} change="+1 this week" positive />
          <StatCard title="Total Users" value="2,522" icon={Users} change="+12.5%" positive />
          <StatCard title="Messages Sent" value="18.4K" icon={Send} change="+8.2%" positive />
          <StatCard title="Uptime" value="99.9%" icon={Activity} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Recent bots */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-sm font-semibold text-foreground">Your Bots</h2>
              <a href="/bots" className="text-xs text-primary flex items-center gap-1 hover:underline">View all <ArrowUpRight className="h-3 w-3" /></a>
            </div>
            <div className="divide-y divide-border">
              {recentBots.map((bot) => (
                <div key={bot.name} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Zap className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{bot.name}</p>
                      <p className="text-xs text-muted-foreground">{bot.commands} commands · {bot.users} users</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${bot.status === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"}`}>
                    {bot.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent logs */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-sm font-semibold text-foreground">Recent Logs</h2>
              <a href="/logs" className="text-xs text-primary flex items-center gap-1 hover:underline">View all <ArrowUpRight className="h-3 w-3" /></a>
            </div>
            <div className="divide-y divide-border">
              {recentLogs.map((log, i) => (
                <div key={i} className="flex items-start gap-3 p-4">
                  <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${log.type === "error" ? "bg-destructive" : log.type === "success" ? "bg-success" : "bg-primary"}`} />
                  <div className="min-w-0">
                    <p className="text-sm text-foreground truncate">{log.event}</p>
                    <p className="text-xs text-muted-foreground">{log.bot} · {log.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
