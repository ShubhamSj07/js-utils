// libs
import { describe, expect, it } from "vitest";

// helpers
import { capitalize } from "../index";

describe("capitalize", () => {
  it("should capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("should return an empty string if the input is an empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("should return the same string if the first letter is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
});
