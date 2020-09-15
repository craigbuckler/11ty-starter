// inline data
const { inlineSource } = require('inline-source');

module.exports = async (content, outputPath) => {

  if (!String(outputPath).endsWith('.html')) return content;

  return await inlineSource(content, {
    compress: true,
    rootpath: './build/'
  });

};
