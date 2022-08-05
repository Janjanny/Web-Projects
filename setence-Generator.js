function sentence(desc, arr) {
    let arrJon = arr.join(", ");
    let tempStr = `The ${arr.length} ${desc} are ${arrJon}.`;
    return tempStr;
}

console.log(sentence("best fruits", ["Apples", "Bananas"]));