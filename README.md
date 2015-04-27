# google-login-tester

[![NPM Version](https://img.shields.io/npm/v/google-login-tester.svg?style=flat)](https://npmjs.org/package/google-login-tester)
[![NPM Downloads](http://img.shields.io/npm/dm/google-login-tester.svg?style=flat)](https://npmjs.org/package/google-login-tester)

*The simplest way to test Google Login.*

![Mad Scientist Sketch](https://github.com/rdegges/google-login-tester/raw/master/mad-scientist-sketch.png)


## Meta

- Author: Randall Degges
- Email: r@rdegges.com
- Twitter: [@rdegges](https://twitter.com/rdegges)
- Site: http://www.rdegges.com
- Status: production ready


## Purpose

At [Stormpath](https://stormpath.com), I find myself debugging a lot of Google
Login applications.  Because of this, I frequently need to test out the Google
Login flow in one way or another, usually by retrieving a unique Authorization
Token.

This command line tool prompts you for the minimal required information in order
to generate a URL that you can copy+paste into your browser to fully test the
login flow, and generate a valid Authorization Token.


## Installation

To install `google-login-tester` using [npm](https://www.npmjs.org/), simply run:

```console
$ npm install -g google-login-tester
```

In the root of your project directory.

**NOTE**: You might need to run the above command with `sudo` depending on how
you installed node.


## Usage

![Usage GIF](https://github.com/rdegges/google-login-tester/raw/master/usage.gif)

Once you have `google-login-tester` installed, you can use it by simply running
`google-login-tester` on the command line.  It will prompt you for your Google
Application's Client ID and Redirect URI, and will give you a URL you can
copy+paste into your web browser to test out the Google Login flow.

```console
$ google-login-tester
```

At the end of the login flow process, you'll have a valid Google Authorization
Token you can use to test your code / project / whatever.


## Changelog

v1.0.1 4-27-2015

    - Fixing initial packaging issues.
    - Fixing initial documentation issues.

v1.0.0: 4-27-2015

    - First release!
