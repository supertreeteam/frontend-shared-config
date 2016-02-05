'use strict';

module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    this.addPackageToProject('broccoli-jscs', '1.2.3');
    this.addPackageToProject('git-repo-info', '^1.0.4');
    this.addPackageToProject('ember-analytics', '^0.0.4');
    this.addPackageToProject('ember-cli-mirage', '0.2.0-beta.3');
    this.addPackageToProject('ember-cli-blanket', '0.4.0');
    this.addPackageToProject('autoprefixer', '^6.0.3');
    this.addPackageToProject('broccoli-jscs', '1.2.2');
    this.addPackageToProject('configstore', '^1.4.0');
    this.addPackageToProject('cssnano', '^3.2.0');
    this.addPackageToProject('ember-browserify', '^1.1.4');
    this.addPackageToProject('ember-cli-font-awesome', '1.4.0');
    this.addPackageToProject('ember-cli-mirage', '0.2.0-beta.3');
    this.addPackageToProject('ember-cli-moment-shim', '1.0.0');
    this.addPackageToProject('ember-cli-postcss-fixed', '0.0.6');
    this.addPackageToProject('ember-cli-select-box', '0.1.9');
    this.addPackageToProject('ember-i18n', '4.2.0');
    this.addPackageToProject('ember-moment', '6.0.0');
    this.addPackageToProject('ember-qunit', '0.4.19');
    this.addPackageToProject('ember-simple-auth', '1.0.1');
    this.addPackageToProject('ember-sinon', '^0.3.0');
    this.addPackageToProject('ember-validations', '^2.0.0-alpha.4');
    this.addPackageToProject('liquid-fire', '0.23.0');
    this.addPackageToProject('markdown-code-highlighting', '0.0.6');
    this.addPackageToProject('moment', '2.11.1');
    this.addPackageToProject('moment-timezone', '0.5.0');
    this.addPackageToProject('postcss-cssnext', '2.4.0');
    this.addPackageToProject('postcss-normalize', '^0.1.2');
    this.addPackageToProject('postcss-scss', '^0.1.3');
    this.addPackageToProject('precss', '^1.2.3');
    this.addBowerPackageToProject('blanket', '~1.1.5');
    this.addBowerPackageToProject('ember-simple-auth', '0.8.0');
    this.addBowerPackageToProject('Faker', '~3.0.0');
    this.addBowerPackageToProject('font-awesome', '~4.5.0');
    this.addBowerPackageToProject('highlightjs', '~9.1.0');
    this.addBowerPackageToProject('lodash', '~3.7.0');
    this.addBowerPackageToProject('marked', '~0.3.5');
    this.addBowerPackageToProject('pretender', '~0.10.1');
    this.addBowerPackageToProject('sinonjs', '^1.17.1');
  }
};
