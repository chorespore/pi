const Bmob = require('./hydrogen-sdk/src/lib/app.js');

Bmob.initialize("d993eb26a1c7e362", "chores");
const table = 'nodes';

function add(name, ip) {
  const query = Bmob.Query(table);
  query.set("name", name);
  query.set("ip", ip);
  query.save().then(res => {
    console.log(JSON.stringify(res));
  }).catch(err => {
    console.log(err);
  });
}

function set(name, ip) {
  const queryId = Bmob.Query(table);
  queryId.equalTo("name", "==", name);
  queryId.find().then(res => {
    if (res.length == 0) {
      add(name, ip);
    } else {
      let id = res[0].objectId;
      setWithId(id, ip);
    }
  }).catch(err => {
    console.log(err)
  });
}

function setWithId(id, ip) {
  const query = Bmob.Query(table);
  query.get(id).then(res => {
    res.set('ip', ip)
    res.save()
    console.log(res.name + ' updated!');
  }).catch(err => {
    console.log(err)
  });
}

function get(name) {
  const query = Bmob.Query(table);
  query.equalTo("name", "==", name);

  return new Promise(function (resolve, reject) {
    query.find().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
}

function getAll() {
  const query = Bmob.Query(table);

  return new Promise(function (resolve, reject) {
    query.find().then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
}

module.exports = {
  set,
  get,
  getAll
}