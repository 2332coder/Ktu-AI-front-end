// Select the hamburger button and sidebar
const hamburgerButton = document.querySelector('.hamburger-button');
const sidebar = document.querySelector('.sidebar-div');

// Add event listener to toggle sidebar
hamburgerButton.addEventListener('click', () => {
    if (sidebar.style.marginLeft === '0px') {
        sidebar.style.marginLeft = '-250px'; // Hide the sidebar
    } else {
        sidebar.style.marginLeft = '0px'; // Show the sidebar
    }
    
});
