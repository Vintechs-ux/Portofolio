// Fungsi untuk memuat komponen
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        console.log(response)
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Memuat semua komponen saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('footer-component', './components/footer.html');
}); 
