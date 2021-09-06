const createError = require('http-errors');
const service = require('./building.service');
const Model = require('../../models/building.model');

exports.updateBuilding = (req, res, next) => {
    const validationErrors = new Model(req.body).validateSync();
    if (validationErrors) {
        return next(
            new createError.BadRequest(validationErrors)
        );
    }

    return service.update(req.params.id, req.body)
        .then(building => {
            res.json(building.id);
        })
        .catch(err => {
            return next(new createError.BadRequest('Missing field'));
        });
}

exports.getAllBuildingWithClassrooms = (req, res, next) => {
    return service.getAll()
        .then(list => {
            res.json(list);
        }).catch(err => {
            console.error(err);
            return new httpError.InternalServerError('List could not send')
        })
};