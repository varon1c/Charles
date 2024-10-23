function toggleMenu() {
    console.log("Toggling menu..."); // Debugging line
    const navPills = document.getElementById('navPills');
    if (navPills.style.display === "flex") {
        navPills.style.display = "none"; // Hide the menu
    } else {
        navPills.style.display = "flex"; // Show the menu
    }
}
