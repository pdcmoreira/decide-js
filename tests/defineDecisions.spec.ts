import { defineDecisions } from "@/index";

describe("defineDecisions", () => {
  describe("primitive values table", () => {
    it("returns the correct result from matching table", () => {
      const actionsDecision = defineDecisions(
        [
          [true, false, false, "Action A"],
          [false, true, false, "Action B"],
          [true, true, true, "Action C"],
        ],
        "No action"
      );

      expect(actionsDecision.decide([false, true, false])).toBe("Action B");
    });
  });
});
