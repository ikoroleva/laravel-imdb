//const form = document.querySelector('.search-form');
const container = document.getElementById('dropdown_search');
const inputEl = document.querySelector('.search');
const datalistEl = document.querySelector('.datalist');
const movieList = document.querySelector('.movies_list');


function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

const loadData = async (searchString) => {

    const response = await fetch('api/people/search/' + searchString);

    //console.log(response);
    const data = await response.json();
    console.log(data);

    return data;



}

const loadMovies = async (personId) => {

    const response = await fetch('api/people/' + personId + '/movies');

    const data = await response.json();
    console.log(data);
    return data;

}


const formHandler = async (e) => {

    const userInput = e.target.value.toLowerCase()

    // if (userInput.length <= 0) {
    //     dropEl.style.height = 0
    //     return dropEl.innerHTML = ''
    // }


    const people = await loadData(userInput);

    datalistEl.innerHTML = ''


    people.forEach(person => {
        const listEl = document.createElement('option');
        const name = decodeHtml(person.fullname);
        listEl.textContent = name;
        listEl.value = name;
        listEl.id = person.id;

        // if (person === userInput) {
        //     listEl.classList.add('match')
        // }
        datalistEl.appendChild(listEl)
    })

    datalistEl.style.display = 'block';

    const options = document.querySelectorAll('option');

    options.forEach(option => {
        option.addEventListener('click', async () => {
            inputEl.value = option.value;
            datalistEl.style.display = 'none';

            movieList.innerHTML = '';

            const movies = await loadMovies(option.id);

            //console.log(movies);

            movies.forEach(movie => {

                const movieEl = document.createElement('li');

                const movieName = decodeHtml(movie.name);
                movieEl.innerText = movieName;

                movieList.appendChild(movieEl);
            })



            //console.log(movies);

        })
    })



    // if (datalistEl.children[0] === undefined) {
    //     return datalistEl.style.height = 0
    // }

    // let totalChildrenHeight = datalistEl.children[0].offsetHeight * people.length
    // datalistEl.style.height = totalChildrenHeight + 'px'

}


inputEl.addEventListener('input', formHandler)





