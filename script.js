const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');
const modal = document.getElementById('modal');
const btnCriarPlaylist = document.querySelector('.btn-criar-palylist');
const btnAgoraNao = document.querySelector('.btn-secondary');
const btnEntrar= document.querySelector('.btn-primary');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result){
    resultPlaylist.classList.add("hidden");
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;        
    });

    resultArtist.classList.remove('hidden');
}


document.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    if ( searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
});

function openModal(){
    modal.style.display = 'flex';
}

function closeModal(){
    modal.style.display = 'none';
}

function login(){
    window.open('https://accounts.spotify.com/pt-BR/login?continue=https%3A%2F%2Fopen.spotify.com%2Fintl-pt' ,'_blank');
}



btnCriarPlaylist.addEventListener('click' , openModal);
btnAgoraNao.addEventListener('click' , closeModal);
btnEntrar.addEventListener('click' , login); 








