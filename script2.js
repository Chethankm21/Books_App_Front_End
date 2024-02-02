document.addEventListener('DOMContentLoaded', function () {
    const createBookForm = document.getElementById('createBookForm');

    createBookForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Fetch values from the form
        const name = document.getElementById('name').value;
        const author = document.getElementById('author').value;
        const publication = document.getElementById('publication').value;
        const category = document.getElementById('category').value;
        const pages = document.getElementById('pages').value;
        const price = document.getElementById('price').value;

        // Prepare payload
        const payload = {
            name: name,
            author: author,
            publication: publication,
            category: category,
            pages: pages,
            price: price
        };

        // Send POST request to the Java API
        fetch('http://localhost:8080/bookstore-spring-boot-demo-0.0.1-SNAPSHOT/bookservice/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            // Optionally, update the table or perform other actions after successful creation
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});


