const express           = require('express'),
      router            = express.Router();


require('dotenv').config()

// INDEX ROUTE
router.get('/', (req, res) => {
    res.render("index");
});

// Authentication 


module.exports = router;