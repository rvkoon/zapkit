const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@Api$": "src/api",
    "^@Tests$": "src/modules/tests",
    "^@Ui$": "src/modules/ui",
  },
};

module.exports = createJestConfig(customJestConfig);
