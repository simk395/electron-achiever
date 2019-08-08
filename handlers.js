const electron = require('electron');
const { ipcRenderer } = electron;

//Handles initial searchbar
const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchbar = document.querySelector('#searchbar')
    console.log(searchbar.value)
})

