module.exports = {
    transform: {
      "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
    },
    testPathIgnorePatterns: [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
    transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
    globals: {
      __PATH_PREFIX__: ``,
    },
    testURL: `http://localhost`,
    setupFiles: [`<rootDir>/loadershim.js`],
  }

  module.exports = {
    testEnvironment: "jsdom",
    // rest of the config from following Gatsby instructions...
  }