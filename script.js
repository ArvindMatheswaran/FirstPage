document.addEventListener('DOMContentLoaded', function() {
    // Find all the grid items and add a click event listener to each of them
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            // Get the URL from the data-url attribute of the clicked grid item
            const url = item.getAttribute('data-url');

            // Navigate to the specified URL
            window.location.href = url;
        });
    });
});