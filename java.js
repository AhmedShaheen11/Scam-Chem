document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.accordion-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const isActive = button.classList.contains('active');
            buttons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
            
            if (!isActive) {
                button.classList.add('active');
                button.nextElementSibling.style.display = 'block';
            }
        });
    });
});
