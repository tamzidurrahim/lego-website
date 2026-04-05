import { ShieldCheck, Truck, Lock } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: ShieldCheck, label: "Authentic LEGO Guarantee", extra: "shimmer-holographic" },
  { icon: Truck, label: "Dhaka Metro: 24-48 Hours" },
  { icon: Lock, label: "Secure SSL Checkout" },
];

export default function TrustBadges() {
  return (
    <section className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
        {badges.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`flex items-center gap-3 px-6 py-3 rounded-lg border border-border bg-card/50 ${b.extra || ""}`}
          >
            <b.icon className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">{b.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
