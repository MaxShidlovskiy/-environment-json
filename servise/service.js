const fs = require(`fs`);

const path = `./storage/storage.json`;

function getAll() {
    const array = JSON.parse(fs.readFileSync(path));
    return array
}

function getById(id) {
    const array = JSON.parse(fs.readFileSync(path));
    let filtered = array.filter(el => el.id == id);
    return filtered;
}

function createData(label, category, priority) {
    const array = JSON.parse(fs.readFileSync(path));
    array.push({
        label: label,
        category: category,
        priority: priority
    })
    fs.writeFileSync(path, JSON.stringify(array))
    return array
}

function updateEnvironment(id, label, category, priority) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter((elem) => elem.id != id);
    if (filtered.length !== arr.length) {
        filtered.push({
            id: id,
            label: label,
            category: category,
            priority: priority
        });
        fs.writeFileSync(path, JSON.stringify(filtered));
        return filtered;

    } else {
        throw new Error('id нет');
    };

};

function deleteEnvironment(id) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter((elem) => elem.id != id);
    fs.writeFileSync(path, JSON.stringify(filtered))
    return filtered;
};

module.exports = {
    getAll, getById, createData, updateEnvironment, deleteEnvironment
};