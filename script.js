$(document).ready(onReady);

function onReady() {
    console.log('I am ready');

    $('#addEmployeeBtn').on('click', addEmployee);
}

// create array of an object to store employee information
let employeeInfo = [];

// create way to capture information on submit

function addEmployee() {
    console.log("in addEmployee");
    // add way to get new employee record
    const newRecord = {
        first: $("#firstNameIn").val(),
        last: $("#lastNameIn").val(),
        id: $("#idIn").val(),
        title: $("#titleIn").val(),
        salary: $("#salaryIn").val(),
    }; // end newRecord
    employeeInfo.push(newRecord);
    console.log(employeeInfo);

} // end addEmployee