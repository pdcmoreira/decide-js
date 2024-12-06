import type {
  DecisionTable,
  Input,
  InputValue,
  InputValueGetter,
  Result,
} from "./types";

/**
 * Match the inputs criteria against a decision table to get the corresponding result.
 *
 * @param decisionTable The decision table with the possible results for each set of inputs criteria.
 * @param inputs The inputs to be evaluated against the decision table.
 * @param defaultResult The default result to be assumed in cases that aren't covered by the decision table.
 * @returns The result from the table that matches the inputs.
 */
export const decide = (
  decisionTable: DecisionTable,
  inputs: InputValue[],
  defaultResult: Result = undefined
) => {
  for (let entry of decisionTable) {
    // An entry needs at least 1 item (which will be assumed to be the result) to be valid
    if (entry.length < 1) {
      continue;
    }

    const entryInputs = entry.slice(0, -1) as Input[];

    const entryResult = entry[entry.length - 1] as Result;

    const itMatches = entryInputs.every((entryInput, index) => {
      let entryInputValue =
        typeof entryInput === "function"
          ? (entryInput as InputValueGetter)(inputs[index])
          : (entryInput as InputValue);

      return entryInputValue === inputs[index];
    });

    if (itMatches) {
      return entryResult;
    }
  }

  return defaultResult;
};

/**
 * Prepare a decision table to be used when needed for a decision.
 *
 * @param decisionTable The decision table with the possible results for each set of inputs criteria.
 * @param defaultResult The default result to be assumed in cases that aren't covered by the decision table.
 * @returns A decision table definition.
 */
export const defineDecisions = (
  decisionTable: DecisionTable,
  defaultResult: Result = undefined
) => ({
  decisionTable,

  defaultResult,

  /**
   * Match the inputs criteria against the decision table to get the corresponding result.
   *
   * @param inputs The inputs to be evaluated against the decision table.
   * @returns The result from the table that matches the inputs.
   */
  decide: (inputs: InputValue[]) =>
    decide(decisionTable, inputs, defaultResult),
});
