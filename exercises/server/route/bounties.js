const bountyRouter = require('express').Router();




bountyRouter.route("/bounties")
    .get((req, res ) => {
        res.send("boom");
    })
    .post()

    bountyRouter.route("/:id")
        .get()
        .put()
        .delete()


module.exports = bountyRouter;