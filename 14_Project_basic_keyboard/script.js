const insert = document.getElementById("insert");
window.addEventListener("keydown", (event) => {
    insert.innerHTML = `
        <div class="key">
            
            <span class="small">event.key:-----> ${event.key === " " ? "Space" : event.key}</span>
        </div>
        <div class="key">
            <span class="small">event.keyCode:-----> ${event.keyCode}</span>
        </div>
        <div class="key">
            <span class="small">event.code:----->  ${event.code}</span>
        </div>
    `;
});

