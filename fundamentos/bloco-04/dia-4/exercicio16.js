function verificaPalindrome (string) {
    let inverso = string.split("").reverse().join("");
    if (string === inverso) {
        return true;
    } else {
        return false;
    };
};

console.log(verificaPalindrome("arara"));