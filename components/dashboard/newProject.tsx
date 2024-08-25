"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import CustomButton from "../ui/customButton";
import { Loader2 } from "lucide-react";


const formSchema = z.object({
  name: z
    .string()
    .min(1)
    .max(16)
    .refine(
      (value) => /^[a-zA-Z0-9_]+$/.test(value),
      "Name must be alphanumeric and can contain underscores"
    ),
  visibility: z.enum(["public", "private"]),
});
type TOptions = "react" | "node" | "python" | "more";
const data: {
  id: TOptions;
  name: string;
  icon: string;
  description: string;
  disabled: boolean;
}[] = [
  {
    id: "react",
    name: "React",
    icon: "/project-icons/react.svg",
    description: "A Javascript library for building user interfaces",
    disabled: false,
  },
  {
    id: "node",
    name: "Node",
    icon: "/project-icons/node.svg",
    description: "A Javascript runtime built on the V8 Javascript engine",
    disabled: false,
  },
  {
    id: "python",
    name: "Python",
    icon: "/project-icons/python.svg",
    description: "A high-level, general-purpose language, coming soon",
    disabled: true,
  },
  {
    id: "more",
    name: "More Languages",
    icon: "/project-icons/more.svg",
    description: "More coming soon!!!",
    disabled: true,
  },
];
export default function 
NewProjectModal ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const [selected, setSelected] = useState<TOptions>("react");
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      visibility: "public",
    },
  });
  return (
    <Dialog
      open={open}
      onOpenChange={(open: boolean) => {
        if (!loading) setOpen(open);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create A Virtualbox</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 w-full gap-2 mt-2">
          {data.map((item) => (
            <button
              onClick={() => setSelected(item.id)}
              disabled={item.disabled || loading}
              key={item.id}
              className={`${
                selected === item.id ? "border-foreground" : "border-border"
              } disabled:opacity-50 disabled:cursor-not-allowed rounded-md border bg-card text-card-foreground shadow text-left p-4 flex flex-col transition-all focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-ring`}
            >
              <div className="space-x-2 flex items-center justify-start w-full">
                <Image alt="" src={item.icon} width={20} height={20} />
                <div className="font-medium">{item.name}</div>
              </div>
              <div className="mt-2 text-muted-foreground">
                {item.description}
              </div>
            </button>
          ))}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-4">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="My project..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="visibility"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormLabel>Visibility</FormLabel>
                  <Select
                    disabled={loading}
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <CustomButton disabled={loading} type="submit" className="w-full">
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" /> Loading...
                </>
              ) : (
                "Submit"
              )}
            </CustomButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}