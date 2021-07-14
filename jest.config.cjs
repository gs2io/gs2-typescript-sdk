module.exports = {
    testEnvironment: "node",
    moduleNameMapper: {
        "@/gs2/(.*)$": "<rootDir>/src/$1"
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    verbose: true,
};
