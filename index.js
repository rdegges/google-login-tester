'use strict';

var prompt = require('prompt');
var vsprintf = require('sprintf-js').vsprintf;

/*
 * Globals.
 */
var URL = 'https://accounts.google.com/o/oauth2/auth?scope=email%%20profile&redirect_uri=%s&response_type=code&client_id=%s&approval_prompt=force';

/*
 * Main application logic.
 */
function main() {
  console.log('1) First, visit the Google Developers Console and create or select your project: https://console.developers.google.com'.magenta);
  console.log('2) Next, enter the required information below to generate a valid Google Login URL:\n'.magenta);

  prompt.message = 'Input Required'.red;
  prompt.start();

  prompt.get(['clientId', 'redirectUri'], function(err, results) {
    console.log('\nPlease copy and paste the URL below into your browser. This will prompt you for Google Login, and then (when confirmed), redirect you to your specified redirectUri along with an authorization code.\n'.magenta);

    // URL encoding the redirectUri is required for the URL to work.
    results.redirectUri = encodeURIComponent(results.redirectUri);

    console.log(vsprintf(URL, [results.redirectUri, results.clientId]).green);
  });
}

/*
 * Start the application.
 */
main();
