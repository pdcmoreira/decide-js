export type InputValue = string | number | boolean | null | undefined;

export type InputValueGetter = (input: InputValue) => InputValue;

export type Input = InputValueGetter | InputValue;

export type Result = unknown;

export type DecisionTable = [...Input[], Result][];
