'use strict';

var RSVP = require('rsvp');

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return RSVP.all([
      this.addPackagesToProject([
        { name: 'autoprefixer',               target: '^6.0.3' },
        { name: 'broccoli-jscs',              target: '1.2.2' },
        { name: 'broccoli-jscs',              target: '1.2.2' },
        { name: 'configstore',                target: '^1.4.0' },
        { name: 'cssnano',                    target: '^3.2.0' },
        { name: 'ember-browserify',           target: '^1.1.4' },
        { name: 'ember-cli-font-awesome',     target: '1.4.0' },
        { name: 'ember-cli-mirage',           target: '0.2.0-beta.3' },
        { name: 'ember-cli-moment-shim',      target: '1.0.0' },
        { name: 'ember-cli-postcss-fixed',    target: '0.0.6' },
        { name: 'ember-cli-select-box',       target: '0.1.9' },
        { name: 'ember-i18n',                 target: '4.2.0' },
        { name: 'ember-moment',               target: '6.0.0' },
        { name: 'ember-qunit',                target: '0.4.19' },
        { name: 'ember-simple-auth',          target: '1.0.1' },
        { name: 'ember-sinon',                target: '^0.3.0' },
        { name: 'ember-validations',          target: '^2.0.0-alpha.4' },
        { name: 'git-repo-info',              target: '^1.0.4' },
        { name: 'liquid-fire',                target: '0.23.0' },
        { name: 'markdown-code-highlighting', target: '0.0.6' },
        { name: 'moment',                     target: '2.11.1' },
        { name: 'moment-timezone',            target: '0.5.0' },
        { name: 'postcss-cssnext',            target: '2.4.0' },
        { name: 'postcss-normalize',          target: '^0.1.2' },
        { name: 'postcss-scss',               target: '^0.1.3' },
        { name: 'precss',                     target: '^1.2.3' }
      ]),
      this.addBowerPackagesToProject([
        { name: 'ember-simple-auth', target: '0.8.0' },
        { name: 'Faker',             target: '~3.0.0' },
        { name: 'font-awesome',      target: '~4.5.0' },
        { name: 'highlightjs',       target: '~9.1.0' },
        { name: 'lodash',            target: '~3.7.0' },
        { name: 'marked',            target: '~0.3.5' },
        { name: 'pretender',         target: '~0.10.1' },
        { name: 'sinonjs',           target: '^1.17.1' }
      ])
    ]);
  }
};
