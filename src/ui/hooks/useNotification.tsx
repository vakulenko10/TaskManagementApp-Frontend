import { toast } from "sonner"

type NotificationType =  "success" | "error" | "warning" | "info";

interface ToastOptions {
  title: string;
  description?: string;
  type?: NotificationType;
  duration?: number;
}

export const useNotification = () => {
    return ({ title, description, type = "success", duration = 3000 }: ToastOptions) => {
      toast[type](title, {
        description,
        duration,
      });
    };
  };