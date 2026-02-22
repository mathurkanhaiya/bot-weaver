import { useState } from "react";
import { Code2, Plus, Play, Save, Trash2 } from "lucide-react";
import { motion } from "framer-motion";
import Editor from "@monaco-editor/react";
import DashboardLayout from "@/components/DashboardLayout";

const sampleTPY = `// TPY - Telegram Bot Scripting Language
// Handler for /start command

bot.sendMessage({
  chat_id: update.message.chat.id,
  text: "👋 Welcome to the bot!\\nUse /help to see available commands.",
  parse_mode: "Markdown"
});

// Save user data
User.saveData("joined", libs.Time.now());
User.saveData("name", update.message.from.first_name);

// Log the event
bot.log("New user: " + update.message.from.first_name);
`;

const commands = [
  { name: "/start", description: "Welcome message", active: true },
  { name: "/help", description: "Show help menu", active: true },
  { name: "/settings", description: "User settings", active: true },
  { name: "/broadcast", description: "Admin broadcast", active: false },
  { name: "*", description: "Wildcard handler", active: true },
];

export default function Commands() {
  const [selected, setSelected] = useState("/start");
  const [code, setCode] = useState(sampleTPY);

  return (
    <DashboardLayout>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Command Editor</h1>
            <p className="text-sm text-muted-foreground mt-1">Write TPY scripts for your bot commands</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm border border-border text-foreground hover:bg-muted transition-colors">
              <Play className="h-4 w-4" /> Test
            </button>
            <button className="flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              <Save className="h-4 w-4" /> Save
            </button>
          </div>
        </div>

        <div className="flex gap-4 h-[calc(100vh-12rem)]">
          {/* Command list */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card w-56 shrink-0 flex flex-col"
          >
            <div className="flex items-center justify-between p-3 border-b border-border">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Commands</span>
              <button className="text-primary hover:text-primary/80">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-1">
              {commands.map((cmd) => (
                <button
                  key={cmd.name}
                  onClick={() => setSelected(cmd.name)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                    selected === cmd.name
                      ? "bg-accent text-accent-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  <span className="font-mono font-medium">{cmd.name}</span>
                  <p className="text-xs text-muted-foreground mt-0.5">{cmd.description}</p>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Editor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="glass-card flex-1 flex flex-col overflow-hidden"
          >
            <div className="flex items-center gap-2 p-3 border-b border-border">
              <Code2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-foreground font-mono">{selected}</span>
              <span className="text-xs text-muted-foreground">— TPY Script</span>
            </div>
            <div className="flex-1 min-h-0">
              <Editor
                height="100%"
                defaultLanguage="javascript"
                value={code}
                onChange={(v) => setCode(v || "")}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  fontFamily: "'JetBrains Mono', monospace",
                  lineNumbers: "on",
                  padding: { top: 12 },
                  scrollBeyondLastLine: false,
                  renderLineHighlight: "gutter",
                  bracketPairColorization: { enabled: true },
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}
