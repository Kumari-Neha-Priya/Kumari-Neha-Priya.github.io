// Collapsible Projects Section
document.querySelectorAll('.collapsible').forEach(item => {
    item.addEventListener('click', () => {
        const details = item.nextElementSibling;
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});

// Add dynamic hover effects or animations here
console.log('Portfolio is ready!');
