import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { products, categories, type ProductCategory } from "@/data/products";

export default function CatalogSection() {
  const [active, setActive] = useState<ProductCategory | "all">("all");

  const filtered = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section id="catalog" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gradient-gold mb-4">The Collection</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Authentic sets. Bangladesh market pricing. Every piece accounted for.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <FilterButton active={active === "all"} onClick={() => setActive("all")} label="All Sets" />
          {categories.map((c) => (
            <FilterButton key={c.id} active={active === c.id} onClick={() => setActive(c.id)} label={c.label} />
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterButton({ active, onClick, label }: { active: boolean; onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
        active
          ? "bg-primary text-primary-foreground glow-gold-sm"
          : "border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
      }`}
    >
      {label}
    </button>
  );
}
