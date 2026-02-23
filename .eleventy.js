const { DateTime } = require("luxon");
const MarkdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  const md = new MarkdownIt({ html: true, linkify: true });
  eleventyConfig.addFilter("markdown", (content) => md.render(content || ""));

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "Asia/Seoul" }).toFormat("yyyy년 LLL dd일");
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "Asia/Seoul" }).toISODate();
  });

  eleventyConfig.addFilter("year", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "Asia/Seoul" }).toFormat("yyyy");
  });

  eleventyConfig.addCollection("issues", function (collectionApi) {
    return collectionApi
      .getFilteredByGlob("src/content/issues/*.md")
      .sort((a, b) => (a.data.issueRank || 999) - (b.data.issueRank || 999));
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data",
      output: "dist"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
