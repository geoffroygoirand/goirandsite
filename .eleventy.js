module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("uploads");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("mentions-legales.html");
  eleventyConfig.addPassthroughCopy("merci.html");
  eleventyConfig.addPassthroughCopy("robots.txt");

  const toDate = (value) => {
    const date = value instanceof Date ? value : new Date(value);
    return Number.isNaN(date.getTime()) ? new Date() : date;
  };

  eleventyConfig.addFilter("dateFr", (value) =>
    new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Europe/Paris"
    }).format(toDate(value))
  );

  eleventyConfig.addFilter("htmlDate", (value) =>
    toDate(value).toISOString().slice(0, 10)
  );

  eleventyConfig.addFilter("xmlDate", (value) =>
    toDate(value).toISOString()
  );

  eleventyConfig.addCollection("articles", (collectionApi) =>
    collectionApi
      .getFilteredByGlob("articles/*.md")
      .sort((a, b) => b.date - a.date)
  );

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
