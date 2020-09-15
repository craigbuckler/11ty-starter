// format number of words and reading time
const
  roundTo     = 10,
  readPerMin  = 200,
  numFormat   = new Intl.NumberFormat('en');

module.exports = count => {

  const
    words     = Math.ceil(count / roundTo) * roundTo,
    mins      = Math.ceil(count / readPerMin);

  return `${ numFormat.format(words) } words, ${ numFormat.format(mins) }-minute read`;

};
