const Model = require('../../models/building.model');

exports.update = (buildingId, className) => Model.findByIdAndUpdate(buildingId, className, { new: true });

exports.getAll = () => Model.find().populate('classrooms');