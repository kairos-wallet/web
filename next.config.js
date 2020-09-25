module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/terms-and-conditions': { page: '/terms-and-conditions' },
      '/privacy-policy': { page: '/privacy-policy' },
    };
  }
};
