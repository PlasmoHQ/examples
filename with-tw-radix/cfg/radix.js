const radix = require("@radix-ui/colors")

const getColorMap = (
  /** @type {Array<keyof import('@radix-ui/colors')>} */
  colorList
) =>
  colorList.reduce((acc, color) => {
    acc[color] = radix[color]
    acc[`${color}Dark`] = radix[`${color}Dark`]
    return acc
  }, {})

module.exports = getColorMap(["gray"])
