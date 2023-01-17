const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@Ui$": "modules/ui",
    "^@Tests$": "modules/tests",
    "^@Api$": "modules/api",
    "^@Signup$": "modules/signup",
    "^@Navigation$": "modules/navigation",
  },
};

module.exports = createJestConfig(customJestConfig);
