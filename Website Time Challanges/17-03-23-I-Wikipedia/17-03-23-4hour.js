
function main(){
    document.addEventListener("DOMContentLoaded", () => {
        createHeaderBar();
    });
}

function createHeaderBar(){
    const wrapper = document.createElement("div");
    wrapper.classList.add("headerWpr-cs");
    document.body.insertBefore(wrapper, document.body.children[0]);

    const hamburger = document.createElement("div"); //change to svg for effect.
    hamburger.classList.add("hamburger-cs");
    wrapper.appendChild(hamburger);

    const logo = document.createElement("img");
    logo.src = "logo.png"
    logo.classList.add("logo-cs");
    wrapper.appendChild(logo);
    
    const searchBarWpr = document.createElement("div");
    searchBarWpr.classList.add("searchBarWpr-cs");
    wrapper.appendChild(searchBarWpr);

        const searchBarIcon = document.createElement("img");
        searchBarIcon.classList.add("searchBarIcon-cs");
        searchBarIcon.src = "magnifying-glass-svgrepo-com.svg"
        searchBarWpr.appendChild(searchBarIcon)

        const searchBarInput = document.createElement("input");
        searchBarInput.classList.add("searchBarInput-cs");
        searchBarInput.placeholder = "Search Website"
        searchBarWpr.appendChild(searchBarInput);

        const searchBarBtn = document.createElement("button");
        searchBarBtn.classList.add("searchBarBtn-cs");
        searchBarBtn.textContent = "Search";
        searchBarWpr.appendChild(searchBarBtn);


    const createAccount = document.createElement("a");
    createAccount.classList.add("createAccount-cs","dontUnderline-cs");
    createAccount.innerText = "Create account"
    createAccount.href="createAccount.html";
    wrapper.appendChild(createAccount);

    const login = document.createElement("a");
    login.classList.add("login-cs","dontUnderline-cs");
    login.innerText = "Login"
    login.href="login.html";
    wrapper.appendChild(login);

    const userMenu = document.createElement("div");
    userMenu.classList.add("userMenu-cs");
    wrapper.appendChild(userMenu);
}
