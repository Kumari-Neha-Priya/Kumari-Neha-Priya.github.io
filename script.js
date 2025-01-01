document.querySelectorAll('details').forEach(detail => {
    detail.addEventListener('toggle', () => {
        if (detail.open) {
            document.querySelectorAll('details').forEach(item => {
                if (item !== detail) {
                    item.removeAttribute('open');
                }
            });
        }
    });
});
