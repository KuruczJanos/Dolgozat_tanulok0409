// File: babel.config.js
// Author: Kurucz János
// Copyright: 2024, Kurucz János
// Group: Szoft II/1/E
// Date: 2024-04-05
// Github: https://github.com/KuruczJanos/Dolgozat_tanulok0409.git

module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
