// findAll  /query => {name:'walid'} or {} to find all data

function findAll(modelName, query) {
  return modelName.find(query);
}

module.exports = {
  findAll: findAll
};
