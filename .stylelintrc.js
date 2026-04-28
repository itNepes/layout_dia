module.exports = {
  extends: "@mate-academy/stylelint-config",
  plugins: [
    "stylelint-scss"
  ],
  rules: {
    // Project uses many non-kebab placeholders/keyframes from Mate templates.
    "scss/percent-placeholder-pattern": null,
    "keyframes-name-pattern": null,

    // Allow custom property ordering and avoid noisy reordering rules.
    "order/properties-order": null,
    "order/order": null,
    "declaration-empty-line-before": null,
    "at-rule-empty-line-before": null,
    "custom-property-empty-line-before": null,
    "declaration-block-no-redundant-longhand-properties": null,

    // Formatting/style preferences that don't affect layout
    "color-hex-length": null,
    "shorthand-property-no-redundant-values": null,
    "font-family-no-missing-generic-family-keyword": null,
    "font-family-name-quotes": null
  }
};
