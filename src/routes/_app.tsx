import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { supabase } from "../utils/supabase";

export const Route = createFileRoute("/_app")({
  component: AppLayoutComponent,
  beforeLoad: async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) {
      throw redirect({ to: "/login" });
    }
    return data;
  },
});

function AppLayoutComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
