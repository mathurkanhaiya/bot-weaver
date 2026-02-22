import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";

export default function Webhooks() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Webhooks</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage bot webhook endpoints</p>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-8 text-center text-muted-foreground text-sm">
          No webhooks yet. Webhooks will be configured automatically when you add a bot.
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
