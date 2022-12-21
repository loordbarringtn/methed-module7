const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];


const addPrefix = (arrayName, prefix) => {
    for (let i=0; i < arrayName.length; i++) {
        arrayName[i] = `${prefix} ` + arrayName[i];
    }
    return arrayName;
}

console.log(addPrefix(names, 'Mr.'));




