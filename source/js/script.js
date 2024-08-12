let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stand for?",
    "What does CSS stand for?"
];

let searchInput = document.querySelector('input')
let searchQuery
let selectedSugs
let resultList = document.querySelector('.autocom-box')
let searchSection = document.querySelector('.search-input')

searchInput.addEventListener('keyup',function(event){
    searchQuery = event.target.value
    if(searchQuery){
        suggest(searchQuery)
    }
})

function suggest(query){

    selectedSugs = suggestions.filter(function(sug){
        return sug.toLowerCase().includes(query)
    })
    searchSection.className = 'search-input active'
    if(selectedSugs.length){
        resultList.innerHTML = ''
        selectedSugs.forEach(function(suggestion){
            resultList.insertAdjacentHTML("afterbegin",'<li>'+ suggestion +'</li>')
        })
    } else {
        resultList.innerHTML = ''
        resultList.insertAdjacentHTML("afterbegin",'<li>'+ query +'</li>')
    }

    let listItems = document.querySelectorAll('li')
    listItems.forEach(function(item){
        item.addEventListener('click',function(event){
            searchInput.value = event.target.innerText
            searchSection.className = 'search-input'
        })
    })
}
