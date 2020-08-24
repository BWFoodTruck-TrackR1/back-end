const db = require('../data/db-config');

module.exports = {
    addDiner,
    findDinerBy,
    findDinerById,
    findAllDiners,
    editDiner,
    deleteDiner,
    editDinerLocation
   
}

function addDiner(diner) {
    return db('diners')
        .insert(diner, 'id')
        .then(ids => {
            const [id] = ids;
            return findDinerById(id);
        })
}

function findDinerBy(filter) {
    return db('diners')
        .where(filter)
}

function findDinerById(id) {
    return db('diners')
        .select('id', 'name', 'username', 'email', 'password', 'location')
        .where({ id })
        .first()
}

function findAllDiners() {
    return db('diners as d')
        .select('d.id', 'd.name', 'd.username', 'd.email', 'd.password', 'd.location',)
}

function editDiner(changes, id) {
    return db('diners')
        .where({ id })
        .update(changes)
        .then(id => {
            return findDinerById(id)
        })
}

function deleteDiner(id) {
    return db('diners')
        .where({ id })
        .del()
}

function editDinerLocation(changes, id) {
    return db('diners')
        .where({ id })
        .update(changes)
        .then(() => {
            return findDinerById(id);
        })
}
