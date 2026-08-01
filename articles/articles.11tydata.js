module.exports = {
  layout: "article.njk",
  permalink: (data) => data.permalink || `articles/${data.page.fileSlug}/index.html`
};
