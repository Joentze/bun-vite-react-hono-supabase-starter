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
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function AppLayoutComponent() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
