function main(){
    document.addEventListener("DOMContentLoaded", () => {
        dropMenu();
    });
}

function dropMenu(){
    const headerDropButton = document.getElementById(`headerDropMenu01_id`);
    const headerDropMenu = document.getElementById(`headerDropMenuMenu01_id`);
    headerDropButton.addEventListener(`hover`, () =>{
        headerDropMenu.style.visibility = "visible";
    });
}