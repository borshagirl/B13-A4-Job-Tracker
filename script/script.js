
let interviewList = [];
let rejectedList = []; 


let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allCardsSection = document.getElementById('all-cards');
// console.log(allCardsSection.children.length);
const mainContainer = document.querySelector('main');
// console.log(mainContainer);


function calculateCount (){
    totalCount.innerText = allCardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;

}

calculateCount ()


function toggleStyle (id) {

    allFilterBtn.classList.remove('bg-blue-600', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-600', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-600', 'text-white');

     allFilterBtn.classList.add('bg-white', 'text-gray-500');
    interviewFilterBtn.classList.add('bg-white', 'text-gray-500');
    rejectedFilterBtn.classList.add('bg-white', 'text-gray-500');
    // console.log(id);

    const selected = document.getElementById(id);
    selected.classList.add('bg-blue-600', 'text-white');
    selected.classList.remove('bg-white', 'text-gray-500');

}