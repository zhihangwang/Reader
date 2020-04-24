// eslint-disable-next-line no-undef
const { resolve } = require("path");

const {
    override,
    fixBabelImports,
    addWebpackAlias,
    addDecoratorsLegacy,
    // eslint-disable-next-line no-undef
} = require("customize-cra");

// eslint-disable-next-line no-undef
module.exports = override(
    addWebpackAlias({
        "@common": resolve("./src/common"),
        "@public": resolve("./public"),
    }),
    addDecoratorsLegacy(),
    fixBabelImports("import", {
        libraryName: "antd-mobile",
        style: "css",
    })
);