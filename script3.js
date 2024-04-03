// Add this code to a file named script3.js

function deleteBook() {
    // Get the book ID from the input field
    var bookId = document.getElementById("deleteId").value;

    // Make a DELETE request to the API endpoint with the book ID as a parameter
    fetch('http://localhost:8080/bookstore-spring-boot-demo-0.0.1-SNAPSHOT/bookservice/books/' + bookId, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle the successful deletion
        console.log('Book deleted successfully', data);
        // You can add further actions as needed
    })
    .catch(error => {
        // Handle errors during the deletion process
        console.error('Error deleting book:', error.message);
    });
}
