import { motion } from "framer-motion";
import { Check } from "lucide-react";

const positioningData = [
  {
    category: "What it captures",
    logsApm: "Events, metrics",
    promptTools: "Prompts, responses",
    agentTrace: "Complete execution reality",
  },
  {
    category: "Reproduction",
    logsApm: "Manual correlation",
    promptTools: "Prompt replay only",
    agentTrace: "Bit-perfect deterministic",
  },
  {
    category: "Where it sits",
    logsApm: "Outside application",
    promptTools: "Prompt layer",
    agentTrace: "Inside execution runtime",
  },
  {
    category: "Debugging model",
    logsApm: "Search & filter",
    promptTools: "Compare prompts",
    agentTrace: "Time-travel, fork, fix",
  },
];

export const PositioningSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest">
            Positioning
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4">
            A different layer entirely
          </h2>
          <p className="text-muted-foreground mt-4">
            AgentTrace sits inside execution — not above it.
          </p>
        </motion.div>

        {/* Positioning table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="panel-border rounded-lg overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-4 border-b border-border bg-card">
              <div className="text-sm font-mono text-muted-foreground"></div>
              <div className="text-sm font-mono text-muted-foreground text-center">
                Logs / APM
              </div>
              <div className="text-sm font-mono text-muted-foreground text-center">
                Prompt Tools
              </div>
              <div className="text-sm font-mono text-primary text-center">
                AgentTrace
              </div>
            </div>

            {/* Rows */}
            {positioningData.map((row, i) => (
              <motion.div
                key={row.category}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="grid grid-cols-4 gap-4 p-4 border-b border-border last:border-b-0 hover:bg-panel/50 transition-colors"
              >
                <div className="text-sm font-medium text-foreground">
                  {row.category}
                </div>
                <div className="text-sm text-center text-muted-foreground">
                  {row.logsApm}
                </div>
                <div className="text-sm text-center text-muted-foreground">
                  {row.promptTools}
                </div>
                <div className="text-sm text-center text-primary flex items-center justify-center gap-2">
                  <Check className="w-4 h-4" />
                  {row.agentTrace}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
