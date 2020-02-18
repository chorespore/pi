const db = require('./db');


async function get() {
    let name = 'rasp';
    let info = await db.get(name);
    console.log(JSON.stringify(info));
}

async function getAll() {
    let info = await db.get();
    console.log(JSON.stringify(info));
}

setInterval(get, 2000);
// get('rock');
// db.set('rasp','5555555')
// get('rasp');
// getAll();