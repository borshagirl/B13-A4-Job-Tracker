
let currentTab = "all";
let tabActive = ["bg-blue-500", "text-white"];
let tabInActive = ["bg-white", "text-gray-500"];

const allContainer = document.getElementById("all-container");
const interviewContainer = document.getElementById("interview-container");
const rejectedContainer = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-state");


function switchTab(tab) {
    // console.log(tab);
    const tabs = ["all", "interview", "rejected"];
    currentTab = tab;

    for (const t of tabs) {
        const tabName = document.getElementById("tab-" + t);
        if(t === tab) {
            tabName.classList.remove(...tabInActive);
            tabName.classList.add(...tabActive);
        }
        else{
            tabName.classList.remove(...tabActive);
            tabName.classList.add(...tabInActive);
        }
    }

    const pages = [allContainer, interviewContainer, rejectedContainer];

    for(const section of pages) {
        section.classList.add("hidden");
    }

    emptyState.classList.add("hidden");



    if(tab === "all"){
        allContainer.classList.remove("hidden");

        if(allContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    }
    else if(tab === "interview"){
        interviewContainer.classList.remove("hidden");

         if(interviewContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    }
    else{
        rejectedContainer.classList.remove("hidden");

         if(rejectedContainer.children.length < 1) {
            emptyState.classList.remove("hidden");
        }
    }

    updateState();
}

// state update
const totalState = document.getElementById("state-total");
const interviewState = document.getElementById("state-interview");
const rejectedState = document.getElementById("state-rejected");
const availableState = document.getElementById("available-jobs-count");


switchTab(currentTab);


document.getElementById("jobs-container").addEventListener("click", function(event) {
    const clickedElement = event.target;
    const card = clickedElement.closest(".card");
    const parent = card.parentNode;
    const status = card.querySelector(".status");

    if (clickedElement.classList.contains("interview-btn")) {
        status.innerText ="Interview";
        interviewContainer.appendChild(card);

        // updateState();
    }

    if (clickedElement.classList.contains("rejected-btn")) {
        status.innerText = "Rejected";
        rejectedContainer.appendChild(card);

        // updateState();
    }

    if (clickedElement.classList.contains("delete-btn")) {
        parent.removeChild(card);

        // updateState();
    }

    updateState();
})


function updateState() {
    // totalState.innerText = allContainer.children.length;
    // interviewState.innerText = interviewContainer.children.length;
    // rejectedState.innerText = rejectedContainer.children.length;

    const counts = {
        all: allContainer.children.length,
        interview: interviewContainer.children.length,
        rejected: rejectedContainer.children.length,
    };

    totalState.innerText = counts["all"];
    interviewState.innerText = counts["interview"];
    rejectedState.innerText = counts["rejected"];

    availableState.innerText = counts[currentTab];

    if(counts[currentTab] < 1) {
        emptyState.classList.remove("hidden");
    }
    else{
        emptyState.classList.add("hidden");
    }
}

updateState();