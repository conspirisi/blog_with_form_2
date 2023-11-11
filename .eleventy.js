module.exports = function (eleventyConfig) {
  // Add your configurations here
  eleventyConfig.addPassthroughCopy("src/styles");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
