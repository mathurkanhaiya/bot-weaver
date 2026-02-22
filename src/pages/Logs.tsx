import { useState } from "react";
import { ScrollText, Search, Filter } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";

const mockLogs = [
  { id: 1, time: "14:32:05", bot: "ShopBot", level: "info", message: "Incoming update from user 12345" },
  { id: 2, time: "14:32:05", bot: "ShopBot", level: "info", message: "Executing /start command handler" },
  { id: 3, time: "14:32:06", bot: "ShopBot", level: "success", message: "Message sent successfully (chat_id: 12345)" },
  { id: 4, time: "14:31:20", bot: "SupportBot", level: "info", message: "Broadcast job started: 856 recipients" },
  { id: 5, time: "14:31:45", bot: "SupportBot", level: "success", message: "Broadcast completed: 856 sent, 0 failed" },
  { id: 6, time: "14:30:00", bot: "NewsBot", level: "error", message: "Error in /fetch handler: Request timeout after 30s" },
  { id: 7, time: "14:29:50", bot: "NewsBot", level: "warn", message: "Rate limit approaching: 28/30 requests per second" },
  { id: 8, time: "14:28:10", bot: "ShopBot", level: "info", message: "Webhook verified successfully" },
  { id: 9, time: "14:27:00", bot: "ShopBot", level: "info", message: "User data saved: user_12345.preferences" },
  { id: 10, time: "14:25:30", bot: "SupportBot", level: "warn", message: "Slow response: 2.3s for /help command" },
];

const levelColors: Record<string, string> = {
  info: "text-primary",
  success: "text-success",
  error: "text-destructive",
  warn: "text-warning",
};

const levelBg: Record<string, string> = {
  info: "bg-primary/10",
  success: "bg-success/10",
  error: "bg-destructive/10",
  warn: "bg-warning/10",
};

export default function Logs() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = mockLogs.filter((log) => {
    if (filter !== "all" && log.level !== filter) return false;
    if (search && !log.message.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Logs</h1>
          <p className="text-sm text-muted-foreground mt-1">Real-time bot execution logs</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px] max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search logs..."
              className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <div className="flex gap-1">
            {["all", "info", "success", "warn", "error"].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level)}
                className={`px-3 py-2 rounded-lg text-xs font-medium capitalize transition-colors ${
                  filter === level ? "bg-primary/20 text-primary" : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass-card overflow-hidden">
          <div className="font-mono text-sm divide-y divide-border">
            {filtered.map((log) => (
              <div key={log.id} className="flex items-start gap-3 px-4 py-2.5 hover:bg-muted/30 transition-colors">
                <span className="text-muted-foreground shrink-0 text-xs pt-0.5">{log.time}</span>
                <span className={`text-xs px-1.5 py-0.5 rounded shrink-0 ${levelBg[log.level]} ${levelColors[log.level]}`}>
                  {log.level.toUpperCase().padEnd(7)}
                </span>
                <span className="text-xs text-muted-foreground shrink-0">[{log.bot}]</span>
                <span className="text-foreground text-xs">{log.message}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
