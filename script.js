const button = document.querySelectorAll('.button');
const description = document.querySelectorAll('.description');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
        description[i].classList.toggle('show-description');
        if (description === 'none') {
            description.classList.toggle('show-description');
        } else {
            description.classList.toggle('description');
        }
    });
}