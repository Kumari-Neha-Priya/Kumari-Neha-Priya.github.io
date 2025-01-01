// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Skill Bars Animation
window.addEventListener('scroll', () => {
    const skills = document.querySelectorAll('.skill .bar');
    skills.forEach(skill => {
        const width = skill.style.width;
        if (skill.getBoundingClientRect().top < window.innerHeight - 50) {
            skill.style.transition = 'width 1.5s ease-in-out';
            skill.style.width = width || '0%'; // Adjust width dynamically
        }
    });
});
