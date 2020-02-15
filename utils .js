// findOne / query => {name:'walid'} or {} / fieldsToReturn => {name:true,age:true}

function findOne(modelName, query, fieldsToReturn) {
  return modelName.findOne(query, fieldsToReturn);
}

// findAll  /query => {name:'walid'} or {} to find all data

function findAll(modelName, query) {
  return modelName.find(query);
}

// insertOne /data => {name:'walid',age:25}

function insertOne(modelName, data) {
  return modelName.create(data);
}

// insertMany / data => [{name:'walid',age:25},{{name:'ahmed',age:24}}]

function insertMany(modelName, data) {
  return modelName.insertMany(data);
}

module.exports = {
  findAll: findAll,
  findOne: findOne,
  insertOne: insertOne,
  insertMany: insertMany
};
