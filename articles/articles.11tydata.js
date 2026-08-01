module.exports = {
  layout: "layouts/article.njk",
  tags: ["article"],
  eleventyComputed: {
    permalink: (data) => `/blog/${data.page.fileSlug}/`
  }
};
