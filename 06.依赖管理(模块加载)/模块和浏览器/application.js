//application.js
require.define('application',function(require,exports){
  var maths = require('./maths').per;
  console.log(maths.per(50,100))
},['./maths']);


