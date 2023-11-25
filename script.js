const form = document.getElementById("form");
const tbody = document.getElementById("body-box");

const onSubmitForm = (event) => {
    event.preventDefault();  // this will prevent erasing of form data when submitted..

    const employee = {
        name: event.target.name.value,
        companyname: event.target.companyname.value,
        salary: event.target.salary.value,
        gender: event.target.gender.value,
        role: event.target.role.value,
        email: event.target.email.value
    }
    addNewEmployee(employee); // function called by addNewEmployee...
}

function deleteRecord(event) {
    const onDelete = event.target;
    onDelete.parentNode.parentNode.remove();
}

function editRecord(event) {
    
}


function addNewEmployee(employee) {
    // we create newemployee to be added in tr, td...
     const row = document.createElement("tr");
     for(let key in employee){
        const cell = document.createElement("td");
        cell.innerText = employee[key]; // gives employee key name value...
        row.appendChild(cell);  // add it in TD...
     }

     const icontd = document.createElement("td");

     const editIcon = document.createElement("span");  // create editicon by this way...
     editIcon.className = "material-icons icon";
     editIcon.innerText = "edit";
     editIcon.addEventListener("click", editRecord);


     const deleteIcon = document.createElement("span");  // create deleteicon by this way...
     deleteIcon .className = "material-icons icon";
     deleteIcon .innerText = "delete";
     deleteIcon.addEventListener("click", deleteRecord);

     icontd.append(editIcon, deleteIcon)
     row.append(icontd);

     tbody.appendChild(row); // add TD into the tbody...
}

form.addEventListener("submit", onSubmitForm);