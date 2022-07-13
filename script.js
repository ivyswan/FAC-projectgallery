
// const description = document.querySelectorAll('.description');

// button.addEventListener("click", function () {
//     description.classList.toggle('show-description');
// });

// const toggleDescription = function () {
//     description.classList.toggle('show-description');
// }

// const toggleDescription = function () {
//     for (let i = 0; i < description.length; i++) {
//         description[i].classList.toggle('show-description');

//     }
// }

// for (let i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", toggleDescription);
// }



const button = document.querySelectorAll('.button');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function (event) {
        event.preventDefault();
        const buttonclicked = event.target;
        const description = buttonclicked.nextElementSibling;
        description.classList.toggle('show-description');
        if (description === 'none') {
            description.classList.toggle('show-description');
        } else {
            description.classList.toggle('description');
        }
    });
}
