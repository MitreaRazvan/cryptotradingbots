import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ModalSubmitNew({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = "Submit a new website";
  const description = "Request us to list your website on this website";

  return (
    <>
      <Drawer>
        <DrawerTrigger className="block md:hidden">{children}</DrawerTrigger>
        <DrawerContent className="mx-2 max-h-[90%] min-h-[70%] px-4">
          <DrawerHeader className="px-0 text-left">
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <div>
            <Label htmlFor="inputUrl">Website URL</Label>
            <Input id="inputUrl" name="url" placeholder="https://example.com" />
          </div>
          <div>
            <Label htmlFor="comment">Comment</Label>
            <Textarea id="comment" placeholder="Leave some notes here ..." />
          </div>
          <DrawerFooter className="my-2 space-y-2 px-0">
            <DrawerClose asChild>
              <Button size="lg" variant="secondary">
                Cancel
              </Button>
            </DrawerClose>
            <Button size="lg">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Dialog>
        <DialogTrigger className="hidden md:block">{children}</DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-left">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <div>
            <Label htmlFor="inputUrl">Website URL</Label>
            <Input id="inputUrl" name="url" placeholder="https://example.com" />
          </div>
          <div>
            <Label htmlFor="comment">Comment</Label>
            <Textarea id="comment" placeholder="Leave some notes here ..." />
          </div>
          <DialogFooter className="flex items-center pt-1">
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button>Submit</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
