const express = require('express');
const router = express.Router();
const knex = require("../db/knex");
const query = require("../db/queries");

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) {
    return next();
  }
  next(new Error("Invalid ID"));
}

function validItem(item) {
  const hasStrain = typeof item.strain == "string";
  const hasTHC = typeof item["THC%"] == "number";
  return hasStrain && hasTHC;
}

router.get("/weeds", (req, res) => {
  query.weeds.getAll().then(weed => res.json(weed));
});

router.get("/weeds/:id", isValidId, (req, res) => {
  query.weeds.getOne(req.params.id).then(weed => res.json(weed || "Not Found"));
});

router.post("/weeds", (req, res, next) => {
  if (validItem(req.body)) {
    query.weeds.create(req.body).then(weed => res.send(weed));
  } else {
    next(new Error("Invalid Item"));
  }
});

router.put("/weeds/:id", isValidId, (req, res, next) => {
  if (validItem(req.body)) {
    query.weeds.put(req.params.id, req.body).then(weed => res.send(weed));
  } else {
    next(new Error("Invalid Item"));
  }
});

router.delete("/weeds/:id", isValidId, (req, res) => {
  query.weeds.delete(req.params.id).then(() => res.send("Deleted"));
});

router.get("/dis", (req, res) => {
  query.des.getAll().then(despensaries => res.send(despensaries));
});

router.get("/dis/:id", isValidId, (req, res) => {
  query.des.getOne(req.params.id).then(dispensary => res.send(dispensary));
});

router.post("/dis", (req, res, next) => {
  if (validItem(req.body)) {
    query.des.create(req.body).then(dispensary => res.send(dispensary));
  } else {
    next(new Error("Invalid Item"));
  }
});

router.put("/dis/:id", isValidId, (req, res, next) => {
  if (validItem(req.body)) {
    query.des.put(req.params.id, req.body).then(dispensary => res.send(dispensary));
  } else {
    next(new Error("Invalid Item"));
  }
});

router.delete("/dis/:id", isValidId, (req, res) => {
  query.des.delete(req.params.id).then(() => res.send("Deleted"));
});

router.get("/weedDis", (req, res) => {
  knex("jointable")
    .select("weedtable.id as id", "weedtable.species", "weedtable.strain", "weedtable.THC%", "weedtable.imgURL", "dispensary.name as dispensary_name", "dispensary.location", "dispensary.hours")
    .innerJoin("weedtable", "jointable.weed_id", "weedtable.id")
    .innerJoin("dispensary", "jointable.dispensary_id", "dispensary.id")
    .then(table => {
      // res.json(table);
      let weedByName = [];
      let allWeedWithDispensary = {};

      table.forEach(weed => {
        if (!allWeedWithDispensary[weed.strain]) {
          const weedWithDispensary = {
            weedSpecies: weed.species,
            weedStrain: weed.strain,
            weedTHC: weed["THC%"],
            dispensary: []
          };
          weedByName.push(weedWithDispensary);
          allWeedWithDispensary[weed.strain] = weedWithDispensary;
        }
        allWeedWithDispensary[weed.strain].dispensary.push(weed.dispensary_name);
      });
      res.json(allWeedWithDispensary);
    });
});

module.exports = router;
