import { Button } from "@/components/ui/button";
import { Twitter, Github, Mail } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { MouseEvent } from "react";

export const Footer = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm bg-primary/20 border border-primary/30 flex items-center justify-center">
              <div className="w-2 h-2 bg-primary rounded-sm" />
            </div>
            <span className="font-medium text-sm text-foreground">AgentTrace</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            © 2026 AgentTrace
          </p>
        </div>

        {/* Massive Footer Text with Single-Layer Light Effect */}
        <div
          className="border-t border-border mt-12 pt-8 pb-4 flex justify-center overflow-hidden relative group"
          onMouseMove={handleMouseMove}
        >
          <motion.h1
            className="text-[18vw] leading-[0.8] font-bold tracking-tighter text-center select-none pointer-events-none uppercase bg-center bg-no-repeat text-transparent pt-8 pb-4"
            style={{
              backgroundImage: useMotionTemplate`radial-gradient(circle 375px at ${mouseX}px ${mouseY}px, hsl(var(--foreground) / 0.9), hsl(var(--foreground) / 0.15))`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
            }}
          >
            agent trace
          </motion.h1>
        </div>
      </div>
    </footer>
  );
};
