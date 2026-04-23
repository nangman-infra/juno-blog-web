import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "@/app/page";

describe("juno blog home", () => {
  it("renders profile information", () => {
    render(<Home />);

    expect(screen.getByText("손준호")).toBeInTheDocument();
    expect(screen.getByText("클라우드 시스템 엔지니어")).toBeInTheDocument();
    expect(screen.getByText("Skill Keywords")).toBeInTheDocument();
  });
});
