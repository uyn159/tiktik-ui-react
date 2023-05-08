/* config-overrides.js webpack*/
//yarn add customize-cra react-app-rewired --dev 
const {
  override,
  useBabelRc
} = require("customize-cra");

module.exports = override(
  useBabelRc()
);