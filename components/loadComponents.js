// Fungsi untuk memuat komponen
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Memuat semua komponen saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('footer-component', '/vintechs-ux.github.io/Portofolio/components/footer.html');
}); 
