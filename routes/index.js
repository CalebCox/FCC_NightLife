const express           = require('express'),
      router            = express.Router();


require('dotenv').config()

// INDEX ROUTE
router.get('/', (req, res) => {
    res.send('Index working');
});

// Authentication 


module.exports = router;