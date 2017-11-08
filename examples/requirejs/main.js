'use strict';

(function run() {
  requirejs.config({
    paths: {
      chai: 'https://cdnjs.cloudflare.com/ajax/libs/chai/4.1.2/chai.min',
    },
  });
  requirejs(window.awFiles, function () {
    if (window.awDevtools) {
      // We need to wait for Chrome to open the `devtools`
      setTimeout(function () { mocha.run(); }, 200);
      return;
    }
    mocha.run();
  });
}());