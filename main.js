define(function (require, exports, module) {
  'use strict';
  
  var LanguageManager = brackets.getModule('language/LanguageManager');

  LanguageManager.defineLanguage('rust', {
      name: 'Rust',
      mode: 'rust',
      fileExtensions: ['rs'],
      blockComment: ['/*', '*/'],
      lineComment: ['//']
  });
});
