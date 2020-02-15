// findOne / query => {name:'walid'} or {} / fieldsToReturn => {name:true,age:true}

function findOne(modelName, query, fieldsToReturn) {
  return modelName.findOne(query, fieldsToReturn);
}

// findAll  /query => {name:'walid'} or {} to find all data

function findAll(modelName, query) {
  return modelName.find(query);
}

module.exports = {
  findAll: findAll,
  findOne: findOne
};
