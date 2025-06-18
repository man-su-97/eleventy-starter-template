const autoprefixer = require("autoprefixer");
const eleventySass = require("eleventy-sass");
const postcss = require("postcss");

module.exports = function (eleventyConfig) {
  // Passthrough copies for static files not processed by Eleventy
  eleventyConfig.addPassthroughCopy("./src/humans.txt");
  eleventyConfig.addPassthroughCopy("./src/robots.txt");
  eleventyConfig.addPassthroughCopy("./src/sitemap.xml");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/scripts");

  eleventyConfig.addPlugin(eleventySass, {
    postcss: postcss([autoprefixer]),
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes/layouts", // Eleventy will look for layouts/partials here
      data: "_data", // Eleventy will look for global data here
    },
  };
};
