import { MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl font-bold text-gradient-gold">DoozyLego</h3>
            <p className="text-xs text-muted-foreground mt-1">Available 10:00–20:00 BST, Dhaka</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:tamzidurrahim49@gmail.com" className="hover:text-primary transition-colors">
              tamzidurrahim49@gmail.com
            </a>
            <a href="tel:+8801919131152" className="hover:text-primary transition-colors">
              01919131152
            </a>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} DoozyLego. The workshop awaits your selection.
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/8801919131152"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] shadow-lg transition-transform hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </>
  );
}
