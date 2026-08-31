var cources = ["html", "css", "js"];
var input = prompt('Enter the cource');
var foundCource = cources.find((item) => item === input);
if (foundCource) {
    console.log('founded')
} else {
    cources.push(input);
    console.log(cources);
}
