function showServices() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
}



const originalColor = '#fd0983';  

buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const cursorX = e.clientX - rect.left; 
        const buttonWidth = rect.width;

        const ratio = cursorX / buttonWidth;

        
        button.style.boxShadow = `0 0 20px rgba(253, 9, 131, 0.8)`;  

        
        button.style.backgroundColor = originalColor;
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = originalColor;
        button.style.boxShadow = ''; 
    });
});
