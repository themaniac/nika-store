import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Reveal } from "@/components/Reveal";

describe("Reveal", () => {
  it("keeps content visible when IntersectionObserver is unavailable", () => {
    render(
      <Reveal>
        <p>Contenuto editoriale</p>
      </Reveal>,
    );

    expect(screen.getByText("Contenuto editoriale").parentElement).toHaveAttribute(
      "data-visible",
      "true",
    );
  });
});
