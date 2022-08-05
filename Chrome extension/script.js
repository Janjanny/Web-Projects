let myLeads = [];
const inputText = document.getElementById("input");
const ulList = document.getElementById('ulList');
const container = document.getElementById('container');
const deleteBtn = document.getElementById('deleteBtn');
const tabBtn = document.getElementById('saveTab');

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));//turn the value back to array

/*const tabs = [{
    url: "www.youtube.com/"
}];*/

tabBtn.addEventListener('click', () => {
    //get the active tab
    //current window
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);
    })
})


function renderLeads(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a href='${leads[i]}' target='_blank'>${leads[i]}</a>
        </li>
        `;
    }
    ulList.innerHTML = listItems;
}

document.getElementById("saveBtn").addEventListener('click', () => {
    if (inputText.value != "") {
        myLeads.push(inputText.value);
    }
    
    inputText.value = "";

    //save to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderLeads(myLeads);
    
})

if (leadsFromLocalStorage) //check if truthy
 {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}


deleteBtn.addEventListener('dblclick', () => {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
})





