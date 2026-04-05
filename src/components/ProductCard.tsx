import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-lg border border-border bg-card overflow-hidden transition-all duration-500 hover:glow-gold-sm"
    >
      {/* Product Image */}
      <div className="h-56 relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={576}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
      </div>

      {/* Wishlist */}
      <button
        onClick={() => setWishlisted(!wishlisted)}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/60 backdrop-blur-sm transition-all hover:bg-background/80"
      >
        <Heart
          className={`w-5 h-5 transition-all ${
            wishlisted ? "fill-primary text-primary heartbeat" : "text-muted-foreground"
          }`}
        />
      </button>

      {/* Info */}
      <div className="p-5 space-y-3">
        <h3 className="font-serif text-lg font-semibold text-foreground leading-tight">{product.name}</h3>

        <p className="text-sm text-muted-foreground leading-relaxed italic line-clamp-2">
          {product.poeticLine}
        </p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="px-2 py-1 rounded bg-secondary">{product.pieces} pieces</span>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-semibold text-gradient-gold">
            ৳{product.price.toLocaleString()}
          </span>
          <motion.button
            whileTap={{ scale: 0.93 }}
            onClick={handleAddToCart}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-all hover:glow-gold-sm"
          >
            <ShoppingBag className="w-4 h-4" />
            {addedToCart ? "Secured!" : "Secure This Build"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
