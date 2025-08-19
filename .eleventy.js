module.exports = function(eleventyConfig) {
    // Decap CMSの管理画面用ファイルをコピーする設定
    eleventyConfig.addPassthroughCopy("admin");
    return {};
  };