import { toast } from "sonner";

interface ISonner {
  message?: string;
  messages?: string[];
  type: "success" | "error" | "info" | "warning";
}

export default function Sonner({ message, messages, type }: ISonner) {
  if (messages) {
    messages.map((message) => {
      toast[type](message);
    });
  } else {
    toast[type](message);
  }
}
