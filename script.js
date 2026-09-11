const departments = [
    {
        name: "Administration",
        employees: [
            {
                firstName: "John",
                lastName: "Smith"
            },
            {
                firstName: "Sarah",
                lastName: "Brown"
            }
        ]
    },

    {
        name: "Information Technology",
        employees: [
            {
                firstName: "Michael",
                lastName: "Johnson"
            },
            {
                firstName: "Emily",
                lastName: "Wilson"
            }
        ]
    },

    {
        name: "Finance",
        employees: [
            {
                firstName: "David",
                lastName: "Lee"
            }
        ]
    }
];


document.addEventListener("DOMContentLoaded", function () {

    const main = document.querySelector("#employee-directory");


    departments.forEach(function (department) {

        const section = document.createElement("section");


        const heading = document.createElement("h2");

        heading.textContent = department.name;


        const employeeList = document.createElement("ul");


        department.employees.forEach(function (employee) {

            const listItem = document.createElement("li");


            if (employee.lastName) {

                listItem.textContent =
                    employee.firstName + " " + employee.lastName;

            } else {

                listItem.textContent = employee.firstName;

            }


            employeeList.appendChild(listItem);

        });


        section.appendChild(heading);

        section.appendChild(employeeList);

        main.appendChild(section);

    });


    const currentYear = new Date().getFullYear();


    document.querySelector("#current-year").textContent =
        currentYear;

});