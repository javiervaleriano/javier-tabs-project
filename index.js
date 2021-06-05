// Select all the buttons
const btns = document.querySelectorAll('.tab');

// Select the container articles
const containerArticle = document.querySelector('.container-article');

// Select all the texts that correspond to each button
const texts = document.querySelectorAll('.content');


containerArticle.addEventListener('click', function (e) {
    // 'e.target' shows the actual element clicked
    const id = e.target.dataset.tab;
    
    // If 'id' is a true value the program executes the if statement
    if (id) {
        btns.forEach(btn => btn.classList.remove('tab-active'));
        e.target.classList.add('tab-active');
        
        texts.forEach(cont => cont.classList.remove('active'));
        document.getElementById(id).classList.add('active');
    }
})