import type { DecisionTable } from "@/types";
import { decide } from "@/index";

describe("decide", () => {
  describe("primitive values table", () => {
    it("returns the correct result from matching table", () => {
      const decisionTable: DecisionTable = [
        [true, false, false, "Action A"],
        [false, true, false, "Action B"],
        [true, true, true, "Action C"],
      ];

      expect(decide(decisionTable, [false, true, false])).toBe("Action B");
    });
  });
});
