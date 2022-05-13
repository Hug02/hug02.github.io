const page1 = document.getElementById("rating_page");
const page2 = document.getElementById("thanks_page");


// rating button
const ranking_numbers = document.getElementsByClassName("rating_number");

let clicked_rate = null;

function rating_clicked(event) {
    console.log("rating_clicked");
    if (clicked_rate)
        clicked_rate.classList.toggle("active");
    event.target.classList.toggle("active");
    clicked_rate = event.target;
}

for (var i=0; i < ranking_numbers.length; i++) {
    ranking_numbers[i].addEventListener("click", rating_clicked);
}

// Submit button
const submit = document.getElementById("submit_button");

submit.addEventListener("click", (event) => {
    if (! clicked_rate) {
        return;
    }
    page1.classList.remove("current_page");
    page2.classList.add("current_page");
    document.getElementById("your_rating").innerText = clicked_rate.innerText;
})