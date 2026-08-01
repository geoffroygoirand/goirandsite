module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("uploads");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("mentions-legales.html");
  eleventyConfig.addPassthroughCopy("merci.html");

  eleventyConfig.addFilter("dateFr", (value) => {
    const date = new Date(value);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/Paris"
    }).format(date);
  });

  eleventyConfig.addFilter("htmlDate", (value) => {
    const date = new Date(value);
    return date.toISOString().slice(0, 10);
  });

  eleventyConfig.addCollection("articles", (collectionApi) =>
    collectionApi.getFilteredByGlob("articles/*.md").sort((a, b) => b.date - a.date)
  );

  return {
    dir: { input: ".", output: "_site", includes: "_includes" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
