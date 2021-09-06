const express = require("express");
const controller = require('./building.controller');
const router = express.Router();

router.get('/', (req, res, next) => {
    return controller.getAllBuildingWithClassrooms(req, res, next);
});

router.put('/:id', (req, res, next) => {
    return controller.updateBuilding(req, res, next);
});

module.exports = router;