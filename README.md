# grunt-jimmify

> A personalized minification and obfuscation experience

## Getting Started
This plugin requires Grunt `~0.4.5`

```shell
npm install grunt-jimmify --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-jimmify');
```

## The "jimmify" task

### Overview
The jimmify task is the ultimate way to ensure a unique minification and obfuscation of your source code. 
It emails the target with a copy of your source, and awaits the reply. Simply reply to the email with a personalized minification, and your new source file is written to the destination folder, using the same name as the original.


```js
grunt.initConfig({
  jimmify: {
    options: {
      // Task-specific options go here.
    },
    src: ['*.js'],
    dest: 'output/'
  },
});
```

### Options

#### options.protocol
Type: `String`
Default value: `'http'`

The protocol used to connect to the backend.

#### options.server
Type: `String`
Default value: `'adamdierkens.com'`

The backend host running the grunt-jimmify-server.

#### options.port
Type: `Integer`
Default value: `3000`

#### options.email
Type: `String` or `Array`
Default value: Jimmy's email address

The target(s) to jimmify your code

### Usage Examples

#### Default Options

```js
grunt.initConfig({
  jimmify: {
    options: {
            
    },
    src: ['*.js'],
    dest: 'output/'
  },
});
```

