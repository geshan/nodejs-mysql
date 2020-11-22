const express = require('express');
const router = express.Router();

/* GET quotes listing. */
router.get('/', function(req, res, next) {
  res.json({
    data: [
      {
        quote: 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.',
        author: 'Bjarne Stroustrup'
      }
    ],
    meta: {
      page: 1
    }
  });
});

module.exports = router;
