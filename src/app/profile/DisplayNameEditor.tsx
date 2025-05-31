"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";
import { Pencil } from "lucide-react";
import { useState } from "react";

export function DisplayNameEditor({ initialName }: { initialName: string }) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function updateDisplayName(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setError(null);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({
      data: { display_name: name },
    });
    setPending(false);
    if (error) {
      setError(error.message);
    } else {
      setEditing(false);
      window.location.reload();
    }
  }

  if (!editing) {
    return (
      <div className="flex items-center gap-2 justify-center">
        <span className="text-lg font-bold">{name}</span>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setEditing(true)}
          aria-label="Edit display name"
        >
          <Pencil size={16} />
        </Button>
      </div>
    );
  }
  return (
    <form
      onSubmit={updateDisplayName}
      className="flex items-center gap-2 justify-center"
    >
      <Input
        name="display_name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-32 h-8 text-base"
        maxLength={32}
        required
      />
      <Button type="submit" size="sm" disabled={pending}>
        Save
      </Button>
      <Button
        type="button"
        size="sm"
        variant="ghost"
        onClick={() => {
          setEditing(false);
          setName(initialName);
        }}
      >
        Cancel
      </Button>
      {error && <span className="text-red-500 text-xs ml-2">{error}</span>}
    </form>
  );
}
