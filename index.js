// Code your solution here
function findMatching(names, list) {
    return names.filter(name => name.toLowerCase() === list.toLowerCase());
}
function fuzzyMatch(names, letter){
    return names.filter(name => name[0].toLowerCase() === letter[0].toLowerCase());

}
function matchName(names , list){
    return names.filter(name => name.name === list);

}