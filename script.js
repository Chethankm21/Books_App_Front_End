// document.addEventListener('DOMContentLoaded', function () {
//     fetchData();
// });

// function fetchData() {
//     //document.getElementById('table-container').style.display = 'block';
//     // Use Fetch API to request data from the Java API endpoint
//     fetch('http://localhost:8080/bookstore-spring-boot-demo-0.0.1-SNAPSHOT/bookservice/books') // Update the URL with your Java API endpoint
//         .then(response => response.json())
//         .then(data => {
//             displayData(data);
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });
// }

// function displayData(data) {
//     const table = document.getElementById('data-table');
//     const headerRow = table.insertRow(0);

//     // Create table header
//     for (const column in data[0]) {
//         if (data[0].hasOwnProperty(column)) {
//             const th = document.createElement('th');
//             th.textContent = column;
//             headerRow.appendChild(th);
//         }
//     }

//     // Populate table with data
//     data.forEach(rowData => {
//         const row = table.insertRow();

//         for (const column in rowData) {
//             if (rowData.hasOwnProperty(column)) {
//                 const cell = row.insertCell();
//                 cell.textContent = rowData[column];
//             }
//         }
//     });
// }

// ------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // fetchData(); // Uncomment this line if you want to fetch data when the page loads
});

function fetchData() {
    // document.getElementById('table-container').style.display = 'block'; // Uncomment this line if you want to display the table initially

    // Use Fetch API to request data from the Java API endpoint
    fetch('http://localhost:8080/bookstore-spring-boot-demo-0.0.1-SNAPSHOT/bookservice/books') // Update the URL with your Java API endpoint
        .then(response => response.json())
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayData(data) {
    const table = document.getElementById('data-table');

    // Clear existing table data
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }

    const headerRow = table.insertRow(0);

    // Create table header
    for (const column in data[0]) {
        if (data[0].hasOwnProperty(column)) {
            const th = document.createElement('th');
            th.textContent = column;
            headerRow.appendChild(th);
        }
    }

    // Populate table with data
    data.forEach(rowData => {
        const row = table.insertRow();

        for (const column in rowData) {
            if (rowData.hasOwnProperty(column)) {
                const cell = row.insertCell();
                cell.textContent = rowData[column];
            }
        }
    });

    // Display the table after fetching and displaying data
    document.getElementById('table-container').style.display = 'block';
}

