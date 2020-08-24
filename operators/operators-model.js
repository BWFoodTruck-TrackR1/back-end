const db = require('../data/db-config');

module.exports = {
    addOperator,
    findOperatorBy,
    findOperatorById,
    editOperator,
    deleteOperator
}

function addOperator(operator) {
    return db('operators')
        .insert(operator, 'id')
        .then(ids => {
            const [id] = ids;
            return findOperatorById(id);
        })
}

function findOperatorBy(filter) {
    return db('operators')
        .where(filter)
}

function findOperatorById(id) {
    return db('operators')
        .select('id', 'username', 'email', 'password')
        .where({ id })
        .first()
}

function editOperator(changes, id) {
    return db('operators')
        .where({ id })
        .update(changes)
        .then(id => {
            return findOperatorById(id);
        })
}

function deleteOperator(id) {
    return db('operators')
        .where({ id })
        .del()
}


