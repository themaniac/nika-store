import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Page from "@/app/page";

describe("landing page", () => {
  it("renders the primary message with one h1", () => {
    const { container } = render(<Page />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /il tuo stile, ogni giorno/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
  });

  it("exposes critical local information and calls to action", () => {
    render(<Page />);

    expect(screen.getAllByText(/prossima apertura/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/corso italia, 121/i).length).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: /scrivici su whatsapp/i })[0],
    ).toHaveAttribute("href", "https://wa.me/393495627208");
    expect(screen.getByText(/immagini indicative/i)).toBeInTheDocument();
  });

  it("renders discoverable sections for woman and man clothing", () => {
    render(<Page />);

    expect(
      screen.getByRole("heading", { name: /libera di essere te/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /essenziale, mai banale/i }),
    ).toBeInTheDocument();
  });
});
