const form = document.getElementById("form");
const input = document.getElementById("input");
const entry = document.getElementById("entry");


function sendData(){
    form.addEventListener("submit", function(e){
        e.preventDefault();
       const entryValue = input.value;
       let oldEntry = localStorage.getItem("Entry");
       let newEntry = oldEntry ? oldEntry.split(",") : [];
       newEntry.push(entryValue);
       localStorage.setItem("Entry", newEntry);

        window.location.href = "entries.html";
    })
}


entry.innerHTML = localStorage.getItem("Entry");

function deleteData() {
    let oldEntry = localStorage.getItem("Entry");
    let deleteEntry = oldEntry ? oldEntry.slice(0, -1) : oldEntry;
    localStorage.setItem("Entry", deleteEntry);
    window.location.href = "entries.html";
  }


  function editData(e) {
   let editEntry = prompt("Edit entry:");
   let oldEntry = localStorage.getItem("Entry");
   let entryArray = oldEntry ? oldEntry.split(",") : [];
   if(entryArray.length > 0){
    entryArray[entryArray.length -1] = editEntry;
    localStorage.setItem("Entry",entryArray.join(","));
   }
    window.location.href = "entries.html";
  }
  