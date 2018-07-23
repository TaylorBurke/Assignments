const express = require("express");
const uuid = require("uuid");
const Bounty = require("../modles/bounties")

const bountiesRouter = express.Router();

bountiesRouter.route("/")
    .get((req, res) => {
        Bounty.find({}, (err, bounties) => {
            return err ? res.status(500).send(err) : res.status(200).send(bounties);
        })
    })
    .post((req, res) => {
        //worry about me later ????
        res.status(200).send(req.body)
    })
module.exports = bountiesRouter;
