import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";

export default function Resources() {
  const [tab, setTab] = useState<"user" | "global">("user");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Resources</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage user and global data</p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="h-4 w-4" /> Add Entry
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 bg-card rounded-lg p-1 w-fit border border-border">
          <button
            onClick={() => setTab("user")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tab === "user" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            User Data
          </button>
          <button
            onClick={() => setTab("global")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tab === "global" ? "bg-primary/20 text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            Global Data
          </button>
        </div>

        <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="glass-card overflow-hidden">
          <div className="p-8 text-center text-muted-foreground text-sm">
            No {tab} data yet. Data will appear here once your bots start storing information.
          </div>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
