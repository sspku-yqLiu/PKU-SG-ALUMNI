import { createRoot } from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <SnackbarProvider>
      <Home />
    </SnackbarProvider>
  </QueryClientProvider>
);
