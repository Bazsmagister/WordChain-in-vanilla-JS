var words = [
    "Alg",
    "Ben",
    "Col",
    "Dae",
    "Ele",
    "Fol",
    "Gor",
    "Hia",
    "Ial",
    "Jal",
    "Lac",
    "Mat",
    "Neo",
    "Osp",
    "Pan",
    "Qua",
    "Rub",
    "San",
    "Tel",
    "Una",
    "Ver",
    "Welt",
    "Xyz",
    "Ytt",
    "Zol",
];

//console.log(words);
//alert(words);

//I hide the button as long the method is not ready.
document.getElementById("invisible").style.display = "none";
//************ */
var txt = "";

words.forEach(myFunction);

function myFunction(value) {
    txt = txt + value + "     ";
    document.getElementById("demo").innerHTML = txt;
}

//*********** */

var text, fLen, i;

fLen = words.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + words[i] + "</li>";
}
text += "</ul>";
document.getElementById("demo2").innerHTML = text;

//********** */

function addWord() {
    //this.words += this.words.push(this.newWord);

    //let newWord = document.querySelector('#newWord').value;
    let newWord = document.getElementById("newWord").value;

    //alert(newWord);

    words.push(newWord);
    //document.getElementById("demo").innerHTML = words;
    //document.getElementById("demo2").innerHTML = words;
    //document.getElementById("demo3").innerHTML = words;

    //alert(words[words.length - 1]);

    var text, fLen, i;

    fLen = words.length;

    text = "<ul>";
    for (i = 0; i < fLen; i++) {
        text += "<li>" + words[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("demo2").innerHTML = text;

    //this.newWord = "";
    //return this.words;

    //alert the last element of the array:
    //alert(this.words[this.words.length - 1]);

    //alert(words);
    //document.getElementById("demo3").innerHTML = addWord();
    //return words;
}

//newWord = "";

//************* */

function lastwordandlastletter() {
    var lastword = words[words.length - 1];
    alert(lastword);

    var lastletter = lastword.charAt(lastword.length - 1);
    alert(lastletter);

    var text, wLen, i;

    wLen = words.length;

    /*
    var wordsinlowercase = [];
    wordsinlowercase = words.toLowerCase();
    alert(wordsinlowercase);
    */
    var wordsinlowercase = [];
    for (i = 0; i < wLen; i++) {
        wordsinlowercase.push(words[i].toLowerCase());
        // words[i].charAt(0).toLowerCase();
        if (wordsinlowercase[i].charAt(0) == lastletter) {
            alert(wordsinlowercase[i]);
        }
    }
    console.log(wordsinlowercase);
}
