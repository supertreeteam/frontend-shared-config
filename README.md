# Front End Shared Config

Shared configuration across all Supertree Ember.js projects.

Add addon to `ember-cli` project as a dependency:

```sh
npm install frontend-shared-config --save-dev
```

Run generator:

```sh
ember g frontend-shared-config
```

Generator will do several things:

+ adds new dependencies
  + `broccoli-jscs`
  + `broccoli-sass`
  + `git-repo-version`
  + `ember-cli-yuidoc`
  + `ember-cli-bugsnag`
  + `ember-analytics`
  + `ember-cli-mirage`
+ adds `.jscsrc` file and `jscs` rules
+ adds `.travis.yml` file
+ adds `testem.json` file
+ adds `.gitignore` file
