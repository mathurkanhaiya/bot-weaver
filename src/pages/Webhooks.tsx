import { Webhook, RefreshCw, CheckCircle2, XCircle } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";

const webhooks = [
  { bot: "ShopBot", url: "https://api.tbc.dev/webhook/shopbot-abc123", status: "active", lastPing: "2 min ago" },
  { bot: "SupportBot", url: "https://api.tbc.dev/webhook/supportbot-def456", status: "active", lastPing: "5 min ago" },
  { bot: "NewsBot", url: "https://api.tbc.dev/webhook/newsbot-ghi789", status: "inactive", lastPing: "3 hrs ago" },
];

export default function Webhooks() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Webhooks</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage bot webhook endpoints</p>
        </div>

        <div className="space-y-4">
          {webhooks.map((wh, i) => (
            <motion.div
              key={wh.bot}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card p-5"
            >
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className={`h-3 w-3 rounded-full ${wh.status === "active" ? "bg-success" : "bg-destructive"}`} />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">{wh.bot}</h3>
                    <p className="text-xs text-muted-foreground font-mono mt-0.5 break-all">{wh.url}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground">Last ping: {wh.lastPing}</span>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border border-border text-foreground hover:bg-muted transition-colors">
                    <RefreshCw className="h-3 w-3" /> Reset
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
