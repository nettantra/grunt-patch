# grunt-patch [![Build Status](https://travis-ci.org/nettantra/grunt-patch.svg?branch=master)](https://travis-ci.org/nettantra/grunt-patch)

> Grunt Patch is a grunt plugin which can be used to patch files using grunt.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-patch --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-patch');
```

## The "patch" task

### Overview
In your project's Gruntfile, add a section named `patch` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  patch: {
    options: {
      patch: 'test/fixtures/default.patch'
    },
    files: {
      'tmp/output.default.patched': 'test/fixtures/input.default'
    }
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `false`

This is a string value which can either be the path of a patch file or the patch string itself. This is a required option

### Usage Examples

#### Default Options
In this example, the default options are used to patch an input file named `input.default` with `default.patch` to output a patched file named `output.default.patched`.

```js
grunt.initConfig({
  patch: {
    options: {
      patch: 'test/fixtures/default.patch'
    },
    files: {
      'tmp/output.default.patched': 'test/fixtures/input.default'
    }
  },
});
```

#### Custom Options
In this example, the custom options are used to patch an input file named `input.custom` with the string mentioned in `patch` to output a patched file named `output.custom.patched`.

```js
grunt.initConfig({
  patch: {
    default_options: {
      options: {
        patch: 'test/fixtures/default.patch'
      },
      files: {
        'tmp/output.default.patched': 'test/fixtures/input.default'
      }
    },
    custom_options: {
      options: {
        patch: "Index: input.custom\n" + 
               "===================================================================\n" + 
               "--- input.custom\n" + 
               "+++ input.custom\n" + 
               "@@ -1,7 +1,7 @@\n" + 
               " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.\n" + 
               " \n" + 
               " Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.\n" + 
               " \n" + 
               "+Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?\n" + 
               "-Adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?\n" + 
               " \n" + 
               " Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\n"
      },
      files: {
        'tmp/output.custom.patched': 'test/fixtures/input.custom'
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## License

  - [The MIT License](http://opensource.org/licenses/MIT)


## Release History

 * 2014-07-31   v0.1.3   Updates to README.
 * 2014-07-31   v0.1.2   Added Travis CI to README.
 * 2014-07-31   v0.1.1   Updated the README file with Release History.
 * 2014-07-31   v0.1.0   First release of grunt-patch.


Copyright (c) [NetTantra Technologies](http://www.nettantra.com/)
---
