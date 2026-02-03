//console.log("JS is linked");

// Wait for the entire page to load first
document.addEventListener("DOMContentLoaded", async function() {
    console.log("page loaded, loading footer and header");

    // Load header and footer
    await loadComponent('header', '../public/everyPage/header.html');
    await loadComponent('footer', '../public/everyPage/footer.html');
});

// Loads an HTML file and puts it into the page
async function loadComponent(elementId, filePath) {
    try {
        // Fetch HTML file
        const response = await fetch(filePath);

        // Convert to text
        const html = await response.text();

        // Find Element with same ID
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
            console.log(`${elementId} loaded successfully.`);
        }
    }   catch (error) {
        console.error(`Error loading ${elementId}:`, error);
    }
}