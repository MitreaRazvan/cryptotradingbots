import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { searchKeyword } from "@/store";
import { Search as SearchIcon, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function Search({ className }: { className?: string }) {
  const [search, setSearch] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDark(isDark);
  }, []);

  const onClickSearch = () => {
    onSearch();
  };

  const onClear = () => {
    if (search !== "") setSearch("");
    searchKeyword.set("");
  };

  const onSearch = () => {
    searchKeyword.set(search);
  };

  return (
    <div
      className={cn(
        "flex w-full items-center justify-center gap-2 md:gap-4",
        className,
      )}
    >
      <div className={cn("relative flex w-full")}>
        <Input
          placeholder="Enter something..."
          value={search}
          className="h-12 w-full bg-background pl-12 text-sm shadow-lg md:h-16 md:text-lg"
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter" || event.keyCode === 13) {
              onSearch();
            }
          }}
        />
        <a
          onClick={onClear}
          className={cn(
            "absolute right-4 top-1 z-10 translate-y-[50%] md:top-2",
            "cursor-pointer text-muted-foreground opacity-0 transition-all",
            search !== "" && "opacity-100",
          )}
        >
          <XCircle className="size-5 md:size-6" />
        </a>
        <SearchIcon
          className={cn(
            "absolute left-4 top-1 translate-y-[50%] md:top-2",
            "size-5 cursor-pointer text-muted-foreground/20 md:size-6",
          )}
        />
      </div>
      <Button
        variant={isDark ? "secondary" : "default"}
        className={cn(
          "h-12 w-32 text-sm font-light shadow-lg md:h-16 md:text-lg",
        )}
        onClick={() => onClickSearch()}
      >
        Search
      </Button>
    </div>
  );
}
