module.exports = function parseStringAsArrayAndLowerCase(arrayAsString) {
  return arrayAsString.split(',').map(text => text.trim().toLowerCase());
}
