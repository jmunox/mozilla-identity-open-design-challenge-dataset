//run from command line: node order
const fs = require('fs');
const beautify = require('js-beautify').js;

fs.readFile('export/all_mozilla.json', 'utf8', function(err, contents) {
    console.log(contents.length);
});

let allData = fs.readFileSync('export/all_mozilla.json');
let orderedData = JSON.parse(allData);

orderedData.sort(function(a, b) {
    return new Date(a.date) - new Date(b.date) // implicit conversion in number
});


console.log('after calling readFile');

let writeData = beautify(JSON.stringify(orderedData), { indent_size: 2, space_in_empty_paren: true });
fs.writeFileSync('ordered_all_mozilla_backup.json', writeData);
