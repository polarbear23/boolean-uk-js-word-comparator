
let sentence1 = prompt("Enter a First Sentence");
let sentence2 = prompt("Enter a Second Sentence");


let spaceCountS1 = 0;
let wordCountS1 = 0;
let totalCharS1 = 0;
let spaceCountS2 = 0;
let wordCountS2 = 0;
let totalCharS2 = 0;

for (let i = 0; i<sentence1.length; i++) {
    
    if(sentence1[i] === " "){
        spaceCountS1++;
    } 
}

totalCharS1 = sentence1.length - spaceCountS1;
wordCountS1 = spaceCountS1 + 1;

for (let i = 0; i<sentence2.length; i++) {
    if(sentence2[i] === " "){
        spaceCountS2++;
    } 
}

totalCharS2 = sentence2.length - spaceCountS2;
wordCountS2 = spaceCountS2 + 1;

if(totalCharS1 === totalCharS2){
    alert("Sentence 1 has the same amount of characters as Sentence 2");
}
else if(totalCharS1 > totalCharS2){
    alert("Sentence 1 has more characters than Sentence 2");
}
else if(totalCharS1 < totalCharS2){
    alert("Sentence 2 has more characters than Sentence 1");
}

if(wordCountS1 === wordCountS2){
    alert(`Sentence 1 has the same amount of words as Sentence 2 which is ${wordCountS1}.`);

}
else if(wordCountS1 > wordCountS2){
    alert(`Sentence 1 has ${wordCountS1} words. Sentence 2 has ${wordCountS2} words. Sentence 1 has ${wordCountS1 - wordCountS2} word(s) more than Sentence 2.`);
}

else if(wordCountS1 < wordCountS2){
    alert(`Sentence 1 has ${wordCountS1} words. Sentence 2 has ${wordCountS2} words. Sentence 2 has ${wordCountS2 - wordCountS1} word(s) more than Sentence 1.`);
}

let word1 = prompt("First Word");
let word2 = prompt("Second Word");

if( word1.length === word2.length ){
    alert(`Both words have a length of ${word1.length}`);
}

else if( word1.length > word2.length ){
    alert(`${word1} has a length of ${word1.length} and ${word2} has a length of ${word2.length}. ${word1} is longer than ${word2}`);
}

else if( word1.length < word2.length ){
    alert(`${word1} has a length of ${word1.length} and ${word2} has a length of ${word2.length} ${word2} is longer than ${word1}`);
}

