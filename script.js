const departments = [
    {
        name: "Administration",
        employees: [
            { firstName: "Zoë", lastName: "Robins" },
            { firstName: "Madeleine", lastName: "Madden" }
        ]
    },
    {
        name: "Audit",
        employees: [
            { firstName: "Josha", lastName: "Sadowski" },
            { firstName: "Kate", lastName: "Fleetwood" }
        ]
    },
    {
        name: "Banking Operations",
        employees: [
            { firstName: "Priyanka", lastName: "Bose" },
            { firstName: "Hammed", lastName: "Animashaun" },
            { firstName: "Álvaro", lastName: "Morte" },
            { firstName: "Taylor", lastName: "Napier" },
            { firstName: "Alan", lastName: "Simmonds" }
        ]
    },
    {
        name: "Communications",
        employees: [
            { firstName: "Gil", lastName: "Cardinal" },
            { firstName: "Richard J.", lastName: "Lewis" }
        ]
    },
    {
        name: "Corporate Services",
        employees: [
            { firstName: "Randy", lastName: "Bradshaw" },
            { firstName: "Tracey", lastName: "Cook" },
            { firstName: "Lubomir", lastName: "Mykytiuk" }
        ]
    },
    {
        name: "Facilities",
        employees: [
            { firstName: "Dakota", lastName: "House" },
            { firstName: "Lori Lea", lastName: "Okemah" },
            { firstName: "Renae", lastName: "Morrisseau" },
            { firstName: "Rick", lastName: "Belcourt" }
        ]
    },
    {
        name: "Financial Services",
        employees: [
            { firstName: "Selina", lastName: "Hanusa" },
            { firstName: "Buffy", lastName: "Gaudry" },
            { firstName: "Shaneen Ann", lastName: "Fox" },
            { firstName: "Allan", lastName: "Little" },
            { firstName: "Danny", lastName: "Rabbit" }
        ]
    },
    {
        name: "Human Resources",
        employees: [
            { firstName: "Jesse Ed", lastName: "Azure" },
            { firstName: "Stacy", lastName: "Da Silva" },
            { firstName: "Vladimír", lastName: "Valenta" },
            { firstName: "Samone", lastName: "Sayeses-Whitney" },
            { firstName: "Paul", lastName: "Coeur" }
        ]
    },
    {
        name: "Information Technology",
        employees: [
            { firstName: "Graham", lastName: "Greene" },
            { firstName: "Sandika", lastName: "Evergreen" },
            { firstName: "Jennifer", lastName: "Rodriguez (Software Developer)" }
        ]
    },
    {
        name: "IT Technician",
        employees: [
            { firstName: "Aiyana", lastName: "Littlebear" },
            { firstName: "Inara", lastName: "Thunderbird" },
            { firstName: "Kaya", lastName: "Runningbrook" },
            { firstName: "Elara", lastName: "Firehawk" },
            { firstName: "Siona", lastName: "Moonflower" },
            { firstName: "Kaiyu", lastName: "Greywolf" },
            { firstName: "Ayawamat", lastName: "Nightwind" },
            { firstName: "Tala", lastName: "Braveheart" },
            { firstName: "Iniko", lastName: "Stonebear" },
            { firstName: "Onatah", lastName: "Redhawk" }
        ]
    }
];


// Wait until the HTML page has loaded
document.addEventListener("DOMContentLoaded", function () {

    const main = document.querySelector("#employee-directory");


    // Go through every department
    departments.forEach(function (department) {

        // Create a section for the department
        const section = document.createElement("section");

        // Create department heading
        const heading = document.createElement("h2");
        heading.textContent = department.name;

        // Create employee list
        const employeeList = document.createElement("ul");


        // Go through employees in this department
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


        // Add department heading and employees to section
        section.appendChild(heading);
        section.appendChild(employeeList);

        // Add section to main page
        main.appendChild(section);
    });


    // Add current year to footer
    const currentYear = new Date().getFullYear();

    document.querySelector("#current-year").textContent =
        currentYear;
});
