import { Shield, CreditCard } from "lucide-react";
import { motion } from "framer-motion";
import DashboardLayout from "@/components/DashboardLayout";

const plans = [
  { name: "Free", price: "$0", features: ["1 Bot", "5 Commands", "100 Users", "Basic Analytics"], current: false },
  { name: "Pro", price: "$19", features: ["10 Bots", "Unlimited Commands", "10K Users", "Full Analytics", "Priority Support"], current: false },
  { name: "Enterprise", price: "$99", features: ["Unlimited Bots", "Unlimited Commands", "Unlimited Users", "Custom Integrations", "Dedicated Support"], current: false },
];

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">Account and subscription settings</p>
        </div>

        {/* Profile */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-5 space-y-4">
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2"><Shield className="h-4 w-4 text-primary" /> Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground block mb-1.5">Email</label>
              <input className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground block mb-1.5">Display Name</label>
              <input className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your name" />
            </div>
          </div>
          <button className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Save Changes
          </button>
        </motion.div>

        {/* Plans */}
        <div>
          <h2 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4"><CreditCard className="h-4 w-4 text-primary" /> Subscription Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-5"
              >
                <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
                <p className="text-2xl font-bold text-gradient mt-1">{plan.price}<span className="text-sm text-muted-foreground font-normal">/mo</span></p>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-4 w-full px-4 py-2 rounded-lg text-sm font-medium bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  Upgrade
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
