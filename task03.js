const names = [
  "Noah",
  "Liam",
  "Mason",
  "Jacob",
  "Robot",
  "William",
  "Ethan",
  "Michael",
  "Alexander",
];

const addPrefix = (arrayName, prefix) => {
  for (key in arrayName) {
    arrayName[key] = prefix + ' ' + arrayName[key];
  }
  return arrayName;
};

console.log(addPrefix(names, "Mr."));
