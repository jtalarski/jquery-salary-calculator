$(document).ready(onReady);

function onReady() {
    console.log('I am ready');

    //$('.addEmployeeBtn').on('click', addEmployee);
    $(document).on("click", ".addEmployeeBtn", addEmployee);
    $(document).on('click', '.deleteButton', onDelete);

}

// create array of an object to store employee information
let employeeInfo = [];
//let totalYearly = 0;
let totalMonthly = 0;

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
    // pass employeeInfo to DOM
    displayEmployees();
    calculateMonthly();
} // end addEmployee

function displayEmployees() {
    console.log('in displayEmployees');
    // mess with outputArea
    let el = $('#outputArea');
    el.empty();
    // loop through employeeInfo to display contents
    for (let i = 0; i < employeeInfo.length; i++) {
        el.append(`
        <li>
        ${employeeInfo[i].first}
        ${employeeInfo[i].last}
        ${employeeInfo[i].id}
        ${employeeInfo[i].title}
        ${employeeInfo[i].salary}
        <button class=deleteButton>Delete</button>
        </li>
        `);
    } // end for
} // end displayEmployees

function onDelete() {
    console.log('in onDelete', $(this));
    $(this).parent().remove();
} // end onDelete

function calculateMonthly() {
    console.log('in calculateMonthly');
    let totalYearly = 0
    for (let i = 0; i < employeeInfo.length; i++) {
        totalYearly += Number(employeeInfo[i].salary);
        totalMonthly = totalYearly / 12
    } // end for
    console.log("monthly total", totalYearly, totalMonthly);
    let el = $('#showMonthly');
    el.empty();
    el.append('Total Monthly:', totalMonthly)
} //end calculateMonthly