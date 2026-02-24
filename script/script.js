
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';


let totalCount = document.getElementById('total-count');
let interviewCount = document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');


const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

const allCardsSection = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');

const emptyMsg = document.getElementById('empty-msg');


function calculateCount (){
    totalCount.innerText = allCardsSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;


}

calculateCount ()


function toggleStyle (id) {

    // removing all btn by bg-blue-600
    allFilterBtn.classList.remove('bg-blue-600', 'text-white');
    interviewFilterBtn.classList.remove('bg-blue-600', 'text-white');
    rejectedFilterBtn.classList.remove('bg-blue-600', 'text-white');

    // adding all btn by bg-white
    allFilterBtn.classList.add('bg-white', 'text-gray-500');
    interviewFilterBtn.classList.add('bg-white', 'text-gray-500');
    rejectedFilterBtn.classList.add('bg-white', 'text-gray-500');

    const selected = document.getElementById(id);
    // console.log(id);
    currentStatus = id;

    // adding blue-bg-600 for currentBtn
    selected.classList.add('bg-blue-600', 'text-white');
    selected.classList.remove('bg-white', 'text-gray-500');

    if(id == 'interview-filter-btn') {
        allCardsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        emptyMsg.classList.remove('hidden');
        
       renderInterview ();
    }

    else if(id == 'all-filter-btn') {
        allCardsSection.classList.remove('hidden');
        filteredSection.classList.add('hidden');
    }
    else if(id == 'rejected-filter-btn') {
        allCardsSection.classList.add('hidden');
        filteredSection.classList.remove('hidden');
        emptyMsg.classList.remove('hidden')
        renderRejected ();
    }

}

 



mainContainer.addEventListener('click', function (event){
    // console.log(event.target.classList.contains('interview-btn'));
    
    // for interview btn
    if(event.target.classList.contains('interview-btn')){
    const parentNode = event.target.parentNode.parentNode;

    const mobileCorp = parentNode.querySelector('.mobileCorp').innerText;
    const reactDeveloper = parentNode.querySelector('.reactDeveloper').innerText;
    const remote = parentNode.querySelector('.remote').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    parentNode.querySelector('.status').innerText = 'Interview'

    const cardsInfo = {
        mobileCorp,
        reactDeveloper,
        remote,
        status: 'Interview',
        notes
    }

    const mobileCorpExist = interviewList.find(item => item.mobileCorp == cardsInfo.mobileCorp);

    if(!mobileCorpExist){
        interviewList.push(cardsInfo);
    }

    rejectedList = rejectedList.filter(item => item.mobileCorp != cardsInfo.mobileCorp);

    calculateCount () 

    if(currentStatus == 'rejected-filter-btn'){
        renderRejected ();
    }

    // renderInterview ()

   }
    
    // for rejected btn
    else if(event.target.classList.contains('rejected-btn')){
    const parentNode = event.target.parentNode.parentNode;

    const mobileCorp = parentNode.querySelector('.mobileCorp').innerText;
    const reactDeveloper = parentNode.querySelector('.reactDeveloper').innerText;
    const remote = parentNode.querySelector('.remote').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    parentNode.querySelector('.status').innerText = 'Rejected'

    const cardsInfo = {
        mobileCorp,
        reactDeveloper,
        remote,
        status: 'Rejected',
        notes
    }

    const mobileCorpExist = rejectedList.find(item => item.mobileCorp == cardsInfo.mobileCorp);

    if(!mobileCorpExist){
        rejectedList.push(cardsInfo);
    }

    interviewList = interviewList.filter(item => item.mobileCorp != cardsInfo.mobileCorp);

    if(currentStatus == 'interview-filter-btn'){
       renderInterview () 
    }

    calculateCount () 

    // renderRejected ()

   }

})


// for interview function
function renderInterview () {

    filteredSection.innerHTML = ''

    for(let interview of interviewList){
        // console.log(interview);
        
        let createDiv = document.createElement('div')
        createDiv.className = 'bg-white flex justify-between p-6 rounded-md'
        createDiv.innerHTML = `

        <div class="space-y-4">
                    <!-- left part 1 -->
                    <div>
                        <h2 class="mobileCorp font-bold text-xl text-blue-950">${interview.mobileCorp}</h2>
                        <p class="reactDeveloper text-gray-500 text-sm">${interview.reactDeveloper}</p>
                    </div>
                    <!-- left part 2 -->
                    <div>
                        <p class="remote text-gray-500 text-sm">${interview.remote}</p>
                     </div>
                     <!-- left part 3 -->
                      <p class="status w-[120px] h-[34px] p-1 bg-blue-50 text-blue-950 font-semibold rounded-md">${interview.status}</p>
                      <p class="notes text-gray-700 text-sm">${interview.notes}</p>
                     <div class="space-x-2">
                        <button class="interview-btn font-semibold text-sm px-3 py-2 text-green-400 border border-green-400 rounded-md">INTERVIEW</button>
                        <button class="rejected-btn font-semibold text-sm px-3 py-2 text-red-400 border border-red-400 rounded-md">REJECTED</button>
                     </div>
                    </div>

                <!-- right-parts -->
                <div>
                    <span class="delete-icon border border-gray-200 p-1.5 rounded-full text-gray-400 text-[12px]"><i class="fa-regular fa-trash-can"></i></span>
                </div>

        `

       filteredSection.appendChild(createDiv);
    }
}

// for rejected function
function renderRejected () {
    filteredSection.innerHTML = ''

    for(let rejected of rejectedList){
        // console.log(rejected);
        
        let createDiv = document.createElement('div')
        createDiv.className = 'bg-white flex justify-between p-6 rounded-md'
        createDiv.innerHTML = `

        <div class="space-y-4">
                    <!-- left part 1 -->
                    <div>
                        <h2 class="mobileCorp font-bold text-xl text-blue-950">${rejected.mobileCorp}</h2>
                        <p class="reactDeveloper text-gray-500 text-sm">${rejected.reactDeveloper}</p>
                    </div>
                    <!-- left part 2 -->
                    <div>
                        <p class="remote text-gray-500 text-sm">${rejected.remote}</p>
                     </div>
                     <!-- left part 3 -->
                      <p class="status w-[120px] h-[34px] p-1 bg-blue-50 text-blue-950 font-semibold rounded-md">${rejected.status}</p>
                      <p class="notes text-gray-700 text-sm">${rejected.notes}</p>
                     <div class="space-x-2">
                        <button class="interview-btn font-semibold text-sm px-3 py-2 text-green-400 border border-green-400 rounded-md">INTERVIEW</button>
                        <button class="rejected-btn font-semibold text-sm px-3 py-2 text-red-400 border border-red-400 rounded-md">REJECTED</button>
                     </div>
                    </div>

                <!-- right-parts -->
                <div>
                    <span class="delete-icon border border-gray-200 p-1.5 rounded-full text-gray-400 text-[12px]"><i class="fa-regular fa-trash-can"></i></span>
                </div>

        `

       filteredSection.appendChild(createDiv);
    }
}
