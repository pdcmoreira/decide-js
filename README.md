Simple decision table implementation in JavaScript/TypeScript.

# Usage

## Example: direct usage

```js
import { decide } from 'decide-js'

const movieGenreDecisionTable = [
  [true, false, false, false, "The Shawshank Redemption"],
  [false, true, true, false, "Shaun of the Dead"],
  [false, true, false, true, "Alien"],
];

const interest = {
  drama: false,
  horror: true,
  comedy: true,
  sciFi: false
}

decide(movieGenreDecisionTable, Object.values(interest)) // => "Shaun of the Dead"
```

## Example: define first, call when needed

```js
import { defineDecisions } from 'decide-js'

// Store the definition somewhere

const movieGenreDecisions = defineDecisions(
[
  [true, false, false, false, "The Shawshank Redemption"],
  [false, true, true, false, "Shaun of the Dead"],
  [false, true, false, true, "Alien"],
]);

// Call when needed

const interest = {
  drama: false
  horror: true,
  comedy: true,
  sciFi: false
}

movieGenreDecisions.decide(Object.values(interest)) // => "Shaun of the Dead"
```