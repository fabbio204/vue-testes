// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
    verbose: true,
    roots: ["<rootDir>/src"],
    moduleFileExtensions: ["js", "json", "vue"],
    testEnvironment: "jsdom", // Instalado separamente,
    testEnvironmentOptions: {
        customExportConditions: ["node", "node-addons"], // configurações para funcionar no Vue
    },
    transform: {
        "\\.[jt]sx?$": "babel-jest",
        "^.+\\.vue$": "@vue/vue3-jest"
    },

    // Relatório de cobertura de testes
    collectCoverage: true,
    collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
    coverageReporters: ["html"]
};

module.exports = config;