import dataWebsites from "@/data/websites.json";
import { cn } from "@/lib/utils";
import { filteredTags } from "@/store";
import { useStore } from "@nanostores/react";
import { X } from "lucide-react";
import { useMemo } from "react";
import { Button } from "./ui/button";

export default function ListTags() {
  const selectedTags: string[] = useStore(filteredTags);

  const tags = useMemo(() => {
    const tags = new Set<string>();
    dataWebsites.forEach((website) => {
      website.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort((a, b) => a.localeCompare(b));
  }, []);

  return (
    <div
      className={cn(
        "container mx-auto p-4 md:px-0 md:py-8",
        "flex flex-wrap items-center justify-center gap-1",
      )}
    >
      {tags.map((tag) => {
        const selected = selectedTags.includes(tag);
        return (
          <Button
            key={tag}
            size="sm"
            variant={selected ? "default" : "outline"}
            onClick={() =>
              filteredTags.set(
                selected
                  ? selectedTags.filter((e) => e !== tag)
                  : [...selectedTags, tag],
              )
            }
            className={cn(
              "flex cursor-pointer items-center gap-2 transition-all",
            )}
          >
            {tag} {selected && <X size={12} />}
          </Button>
        );
      })}
    </div>
  );
}
