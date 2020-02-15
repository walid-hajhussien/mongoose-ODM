// findOne / query => {name:'walid'} or {} / fieldsToReturn => {name:true,age:true}

function findOne(modelName, query, fieldsToReturn) {
  return modelName.findOne(query, fieldsToReturn);
}

// findMany  /query => {name:'walid'} or {} to find all data

function findMany(modelName, query) {
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

// updateOne / query => {name:'walid'} , updateData => {age:27}

function updateOne(modelName, query, updateData) {
  return modelName.updateOne(query, updateData);
}

// updateMany / query => {name:'walid'} , updateData => {age:27}

function updateMany(modelName, query, updateData) {
  return modelName.updateMany(query, updateData);
}

// deleteOne  / query => {name:'walid'}

function deleteOne(modelName, query) {
  return modelName.deleteOne(query);
}

// deleteMany  / query => {name:'walid'}

function deleteMany(modelName, query) {
  return modelName.deleteMany(query);
}

module.exports = {
  findMany: findMany,
  findOne: findOne,
  insertOne: insertOne,
  insertMany: insertMany,
  updateOne: updateOne,
  updateMany: updateMany,
  deleteOne: deleteOne,
  deleteMany: deleteMany
};
