import { BarChart3, TrendingUp, Users, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import DashboardLayout from "@/components/DashboardLayout";
import StatCard from "@/components/StatCard";

const messageData = [
  { date: "Mon", messages: 420 },
  { date: "Tue", messages: 680 },
  { date: "Wed", messages: 510 },
  { date: "Thu", messages: 890 },
  { date: "Fri", messages: 1200 },
  { date: "Sat", messages: 750 },
  { date: "Sun", messages: 620 },
];

const userGrowth = [
  { date: "Jan", users: 180 },
  { date: "Feb", users: 340 },
  { date: "Mar", users: 520 },
  { date: "Apr", users: 710 },
  { date: "May", users: 1050 },
  { date: "Jun", users: 1480 },
  { date: "Jul", users: 2100 },
];

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
          <p className="text-sm text-muted-foreground mt-1">Track your bot performance</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="Messages Today" value="1,247" icon={MessageSquare} change="+18%" positive />
          <StatCard title="Active Users" value="892" icon={Users} change="+5.3%" positive />
          <StatCard title="Commands Run" value="3,461" icon={BarChart3} change="+12%" positive />
          <StatCard title="Growth Rate" value="24%" icon={TrendingUp} change="+2.1%" positive />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-5">
            <h2 className="text-sm font-semibold text-foreground mb-4">Messages This Week</h2>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={messageData}>
                <defs>
                  <linearGradient id="msgGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(187, 80%, 48%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(187, 80%, 48%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
                <XAxis dataKey="date" stroke="hsl(215, 12%, 52%)" fontSize={12} />
                <YAxis stroke="hsl(215, 12%, 52%)" fontSize={12} />
                <Tooltip contentStyle={{ background: "hsl(220, 18%, 11%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: 8, color: "hsl(210, 20%, 92%)" }} />
                <Area type="monotone" dataKey="messages" stroke="hsl(187, 80%, 48%)" fill="url(#msgGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-5">
            <h2 className="text-sm font-semibold text-foreground mb-4">User Growth</h2>
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 18%)" />
                <XAxis dataKey="date" stroke="hsl(215, 12%, 52%)" fontSize={12} />
                <YAxis stroke="hsl(215, 12%, 52%)" fontSize={12} />
                <Tooltip contentStyle={{ background: "hsl(220, 18%, 11%)", border: "1px solid hsl(220, 14%, 18%)", borderRadius: 8, color: "hsl(210, 20%, 92%)" }} />
                <Bar dataKey="users" fill="hsl(187, 80%, 48%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
