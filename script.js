// Progress Bar Animation on Scroll
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress-bar');

    // Function to animate progress bars
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        });
    };

    // Trigger the animation when the skill bars come into view
    const skillSection = document.getElementById('skills');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                observer.disconnect(); // Disconnect observer after animation
            }
        });
    }, options);

    observer.observe(skillSection);

    // Circular Charts using Chart.js
    const htmlChart = document.getElementById('htmlChart').getContext('2d');
    const cssChart = document.getElementById('cssChart').getContext('2d');
    const jsChart = document.getElementById('jsChart').getContext('2d');

    const createChart = (context, value) => {
        return new Chart(context, {
            type: 'doughnut',
            data: {
                labels: ['Completed', 'Remaining'],
                datasets: [{
                    data: [value, 100 - value],
                    backgroundColor: ['#007BFF', '#e0e0e0'],
                    borderWidth: 0
                }]
            },
            options: {
                cutoutPercentage: 70,
                rotation: Math.PI,
                circumference: Math.PI,
                responsive: true,
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    };

    // Create charts with different skill values
    createChart(htmlChart, 90);  // HTML
    createChart(cssChart, 85);   // CSS
    createChart(jsChart, 80);    // JavaScript
});
