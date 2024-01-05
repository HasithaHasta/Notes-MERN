const express = require("express");
const router = express.Router();

router.get('/search', async(req,res) => {
    try {
        const result = await CourseModel.aggregate(
            [
                {
                  $search: {
                    index: "search-notes",
                    text: {
                      query: req.query.t,
                      path: {
                        wildcard: "*"
                      }
                    }
                  }
                }
              ]
        )
        res.status(200).send(result);
    } catch(error){
        res.status(404).send("hello");
    }
});


module.exports = router;