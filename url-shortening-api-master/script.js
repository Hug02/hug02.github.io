const btnMenu = document.getElementById("pop-up-menu-btn");

loadSavedLink();

btnMenu.addEventListener("click", () => {
    let popUpMenu = document.getElementsByClassName("pop-up-menu")[0]
    if (popUpMenu.classList.contains("hidden")) {
        popUpMenu.classList.remove("hidden");
        popUpMenu.classList.add("visible");
    }
    else {
        popUpMenu.classList.remove("visible");
        popUpMenu.classList.add("hidden");
    }
});


function verifyInput(input) {
    const reg = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/;
    const inputDiv = document.getElementsByClassName("input-group")[0];
    if (reg.test(input)) {
        if (inputDiv.classList.contains("error"))
            inputDiv.classList.remove("error");
        return true;
    }
    else {
        inputDiv.classList.add("error");
        return false;
    }
}

function saveLinkToStorage(baseUrl, shortUrl){
    let savedLinks = JSON.parse(localStorage.getItem("savedLinks"));
    if (savedLinks == null)
        savedLinks = {listOfLink: []};
    const newLink = {baseUrl: baseUrl, shortUrl: shortUrl};
    savedLinks.listOfLink.push(newLink);
    localStorage.setItem("savedLinks", JSON.stringify(savedLinks));
}

function shortenLink(url) {
    if (verifyInput(url)) {
        let api_url = `https://api.shrtco.de/v2/shorten?url=${url}`;
        fetch(api_url)
            .then(response => response.json())
            .then(resJson => {
                if (! resJson.ok)
                    return;
                else {
                    saveLinkToStorage(resJson.result.original_link, resJson.result.full_short_link);
                    addLinkPanel(resJson.result.original_link, resJson.result.full_short_link);
                }
            });
    }
}

function addLinkPanel(originUrl, shortUrl) {
    const newPanel = document.createElement("div");
    newPanel.className = "shorten-link-panel";
    
    const originLink = document.createElement("span");
    originLink.className = "origin-link";
    originLink.innerHTML = originUrl;
    newPanel.appendChild(originLink);

    const line = document.createElement("div");
    line.className = "thin-line";
    newPanel.appendChild(line);

    const shortLink = document.createElement("span");
    shortLink.className = "short-link";
    shortLink.innerHTML = shortUrl;
    newPanel.appendChild(shortLink);

    const btn = document.createElement("button");
    btn.className = "btn-style-2";
    btn.type = "button";
    btn.innerHTML = "Copy";
    btn.addEventListener("click", e => {
        navigator.clipboard.writeText(shortUrl);
        toggleButtonToCopied(e.target);
        setTimeout(toggleButtonToCopied.bind(null, e.target), 1500);
    })
    newPanel.appendChild(btn);

    const container = document.getElementById("shorten-link-container");
    container.appendChild(newPanel);
}

function loadSavedLink() {
    const savedLinks = JSON.parse(localStorage.getItem("savedLinks"));
    if (savedLinks == null) return;

    const savedLinksList = savedLinks.listOfLink;
    savedLinksList.forEach(links => {
        addLinkPanel(links.baseUrl, links.shortUrl);
    });
}

function toggleButtonToCopied(btn) {
    if (btn.classList.contains("btn--clicked")) {
        btn.innerHTML = "Copy";
        btn.classList.remove("btn--clicked");
    }
    else {
        btn.innerHTML = "Copied !";
        btn.classList.add("btn--clicked");
    }
}
