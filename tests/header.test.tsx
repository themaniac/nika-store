import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Header } from "@/components/Header";

describe("Header", () => {
  it("opens and closes the mobile navigation", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const openButton = screen.getByRole("button", { name: /apri il menu/i });
    expect(openButton).toHaveAttribute("aria-expanded", "false");

    await user.click(openButton);

    const closeButton = screen.getByRole("button", { name: /chiudi il menu/i });
    expect(closeButton).toHaveAttribute("aria-expanded", "true");
    expect(
      screen.getByRole("navigation", { name: /menu mobile/i }),
    ).toBeVisible();

    await user.click(closeButton);
    expect(
      screen.getByRole("button", { name: /apri il menu/i }),
    ).toHaveAttribute("aria-expanded", "false");
  });

  it("closes on Escape and returns focus to the trigger", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const trigger = screen.getByRole("button", { name: /apri il menu/i });
    await user.click(trigger);
    await user.keyboard("{Escape}");

    expect(
      screen.queryByRole("navigation", { name: /menu mobile/i }),
    ).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });

  it("closes after selecting a mobile anchor", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: /apri il menu/i }));
    const mobileNav = screen.getByRole("navigation", { name: /menu mobile/i });
    await user.click(
      mobileNav.querySelector('a[href="#stile"]') as HTMLAnchorElement,
    );

    expect(
      screen.queryByRole("navigation", { name: /menu mobile/i }),
    ).not.toBeInTheDocument();
  });
});
