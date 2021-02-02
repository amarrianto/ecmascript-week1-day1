function searchWord(word, value){
    for(let i = 0; i < word.length; i++){
        if (word[i] === value){
            return true;
        }
    }
    return false;
}
console.log(searchWord("aku suka java","k"));
console.log(searchWord("aku suka javascript","z"));
