// maybe package.json scripts "build" with --minify in the future
/*
"build": "tsup src/index.ts --minify --dts --format cjs,esm --out-dir dist",
*/

export const arpeSurveyCore = {
  readTest: () => {
    console.log("archipelago-survey-core (v0.0.2) ready to use.");
  },

  b: {
    f: 4,
    b: 9,
    m: 7,
  },
} as const;

export default arpeSurveyCore;
