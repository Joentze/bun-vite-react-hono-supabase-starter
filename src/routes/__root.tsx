import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <MantineProvider>
        <Outlet />
        <TanStackRouterDevtools />
      </MantineProvider>
    </React.Fragment>
  );
}
