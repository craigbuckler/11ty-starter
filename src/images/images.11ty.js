// image minification
const
  dest = './build/images',

  fsp = require('fs').promises,
  imagemin = require('imagemin'),
  plugins = [
    require('imagemin-mozjpeg')(),
    require('imagemin-pngquant')({ strip: true }),
    require('imagemin-svgo')()
  ];

module.exports = class {

  data() {

    return {
      permalink: false,
      eleventyExcludeFromCollections: true
    };

  }

  // process all files
  async render() {

    // destination already exists?
    try {
      let dir = await fsp.stat(dest);
      if (dir.isDirectory()) return true;
    }
    catch(e){}

    // process images
    console.log('optimizing images');

    await imagemin(['src/images/*', '!src/images/*.js'], {
      destination: dest,
      plugins
    });

    return true;

  }
};
