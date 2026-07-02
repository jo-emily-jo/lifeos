import type { NavGroup } from "@/types";

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "INTERPRETATION",
    items: [
      { id: "patterns", code: "A", label: "Repeated Patterns" },
      { id: "decision", code: "B", label: "Decision Architecture" },
      { id: "motivation", code: "C", label: "Motivation System" },
      { id: "stress", code: "D", label: "Stress System" },
      { id: "shadow", code: "E", label: "Shadow of Strength" },
      { id: "origins", code: "F", label: "Environmental Origins" },
      { id: "contradiction", code: "G", label: "Contradiction Map" },
      { id: "trajectory", code: "H", label: "Future Trajectory" },
    ],
  },
  {
    label: "REFLECTION",
    items: [{ id: "mirror", code: "I", label: "Philosophical Mirror" }],
  },
  {
    label: "YOUR LIFE OS",
    items: [{ id: "constitution", code: "§", label: "Life Constitution" }],
  },
];
