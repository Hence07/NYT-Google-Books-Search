const axios = require("axios");
const router = require("express").Router();

router.get("/books", (req, res) => {
    axios
        .get(" ", {
            params: req.query
        })
        .then(({
            data: {
                results
            }
        }) => res.json(results))
        .catch(err => res.status(421).json(err));
})

module.exports = router;