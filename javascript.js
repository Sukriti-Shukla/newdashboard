document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.getElementById('mode');
    themeToggle.addEventListener('click', () => {
       
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'styling.css';
            themeToggle.innerHTML = '<i class="las la-bolt"></i>';
        } else {
          
            themeStylesheet.href = 'styling_light.css';
            themeToggle.innerHTML = '<i class="las la-moon"></i>';
        }
        
        localStorage.setItem('theme',themeStylesheet.href)  
    })
})