var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/front-app-cloud/index.html', { root: "public" });
});

router.get('/styles.51a1fa8aedc89704a63a.css', function(req, res, next) {
  res.sendFile('/front-app-cloud/styles.51a1fa8aedc89704a63a.css', { root: "public" });
});

router.get('/runtime.0e49e2b53282f40c8925.js', function(req, res, next) {
  res.sendFile('/front-app-cloud/runtime.0e49e2b53282f40c8925.js', { root: "public" });
});

router.get('/polyfills.8c151b8375e767ff858f.js', function(req, res, next) {
  res.sendFile('/front-app-cloud/polyfills.8c151b8375e767ff858f.js', { root: "public" });
});

router.get('/main.a3ef00dcc2a486e2af52.js', function(req, res, next) {
  res.sendFile('/front-app-cloud/main.a3ef00dcc2a486e2af52.js', { root: "public" });
});

module.exports = router;
