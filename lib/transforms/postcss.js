// PostCSS CSS processing

/* global dev */

const
  postcss = require('postcss'),
  postcssPlugins = [
    require('postcss-advanced-variables'),
    require('postcss-nested'),
    require('cssnano')
  ],
  postcssOptions = {
    from: 'src/scss/entry.scss',
    syntax: require('postcss-scss'),
    map: dev ? { inline: true } : false
  };

module.exports = async (content, outputPath) => {

  if (!String(outputPath).endsWith('.css')) return content;

  return (
    await postcss(postcssPlugins).process(content, postcssOptions)
  ).css;

};
