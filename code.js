const async = require('async');

function numMatches(ar, key) {
  let count = 0;
  return new Promise((resolve) => {
    async.each(ar, function(i, done) {
      if (i == key) count++;
      done();
    }, function() {
      resolve(count);
    });
  });
}
