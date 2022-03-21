var words = [];
function add_word() {
    words.push(document.getElementById("input_word").value);
    document.getElementById("input_word").value = "";
}

function search_word() {
    let searched_word = document.getElementById("searched_word").value;
    if (words.includes(searched_word)) {
        alert("The word exists in the dictionary");
        document.getElementById("searched_word").value = "";
    } else {
        alert("The word doesn't exist in the dictionary but I added it now. Thank you!");
        words.push(searched_word);
        document.getElementById("searched_word").value = "";
    }
}