const assetPrefix = process.env.ENV_GH_PAGES ? '/dyeui/' : '';

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' }
    }
  },
  assetPrefix
};
