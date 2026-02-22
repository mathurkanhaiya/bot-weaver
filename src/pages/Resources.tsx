import { useState } from "react";
import { Database, Plus, Trash2, Edit2 } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";

const mockUserData = [
  { key: "user_12345.name", value: "John Doe", type: "string" },
  { key: "user_12345.joined", value: "1705312200", type: "number" },
  { key: "user_12345.preferences", value: '{"lang":"en","notify":true}', type: "json" },
  { key: "user_67890.name", value: "Jane Smith", type: "string" },
];

const mockGlobalData = [
  { key: "welcome_message", value: "Welcome to our bot! 🎉", type: "string" },
  { key: "maintenance_mode", value: "false", type: "boolean" },
  { key: "version", value: "2.1.0", type: "string" },
];

export default function Resources() {
  const [tab, setTab] = useState<"user" | "global">("user");

  const data = tab === "user" ? mockUserData : mockGlobalData;

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
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="text-left p-3 font-medium">Key</th>
                <th className="text-left p-3 font-medium">Value</th>
                <th className="text-left p-3 font-medium">Type</th>
                <th className="text-right p-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {data.map((item) => (
                <tr key={item.key} className="text-foreground hover:bg-muted/30 transition-colors">
                  <td className="p-3 font-mono text-xs text-primary">{item.key}</td>
                  <td className="p-3 font-mono text-xs max-w-xs truncate">{item.value}</td>
                  <td className="p-3"><span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">{item.type}</span></td>
                  <td className="p-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"><Edit2 className="h-3.5 w-3.5" /></button>
                      <button className="p-1.5 rounded hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"><Trash2 className="h-3.5 w-3.5" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </DashboardLayout>
  );
}
