module.exports = {
  layout: "article.njk",
  eleventy: {
    computed: {
      permalink: (data) =>
        data.permalink || `articles/${data.page.fileSlug}/index.html`
    }
  }
};
