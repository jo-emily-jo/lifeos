"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export interface ConsItem {
  id: string;
  text: string;
  yours: boolean;
}

/** A single editable Constitution line. Seeded items become "YOURS" once edited. */
export function EditableItem({
  item,
  onSave,
  onRemove,
}: {
  item: ConsItem;
  onSave: (id: string, text: string) => void;
  onRemove: (id: string) => void;
}) {
  const [editing, setEditing] = useState(item.text === "");
  const [draft, setDraft] = useState(item.text);

  if (editing) {
    return (
      <div className="rounded-sm border border-hair bg-ink-700 p-3.5">
        <Textarea
          rows={2}
          autoFocus
          value={draft}
          placeholder="In your own words…"
          onChange={(e) => setDraft(e.target.value)}
        />
        <div className="mt-2.5 flex gap-2">
          <Button
            size="sm"
            onClick={() => {
              if (!draft.trim()) return onRemove(item.id);
              onSave(item.id, draft.trim());
              setEditing(false);
            }}
          >
            Save
          </Button>
          <Button size="sm" variant="secondary" onClick={() => (item.text ? setEditing(false) : onRemove(item.id))}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-3 rounded-sm border border-hair bg-ink-700 px-4 py-3.5">
      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-umber" />
      <span className="flex-1 text-[15px] leading-[1.5] text-[#D9D3C4]">{item.text}</span>
      {item.yours && (
        <span className="mt-0.5 flex-none rounded-sm border border-umber/30 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.1em] text-umber-text">
          YOURS
        </span>
      )}
      <button onClick={() => setEditing(true)} className="flex-none px-1 text-[12px] text-text-faint hover:text-[#C9C1AE]">
        edit
      </button>
      <button onClick={() => onRemove(item.id)} className="flex-none px-0.5 text-text-faint hover:text-oxblood-text" aria-label="Remove">
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
