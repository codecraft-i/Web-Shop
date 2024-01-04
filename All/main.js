// Select Option of Languages

function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.classList.toggle("show");
}

function selectOption(option, imagePath) {
    var dropdownButton = document.querySelector('.dropdown-btn');
    dropdownButton.innerHTML = `<img src="${imagePath}" class="selected_languageIcon" alt="${option}">${option}`;
    toggleDropdown(); // Close the dropdown after selecting an option
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Search


// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// if user press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            //filtering array value and user characters to lowercase and return only those words which are start with user enetered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            // passing return data inside li tag
            return data = `<li>${data} <span class="search-get-icon"><i class='bx bx-search'></i></span></li>`;
        });
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}

window.onclick = function (event) {
    searchWrapper.classList.remove("active");
}



// Main Second Header (Wrapper Events)

const tabsBox = document.querySelector(".tabs-box"),
allTabs = tabsBox.querySelectorAll(".tab"),
arrowIcons = document.querySelectorAll(".icons i");

let isDragging = false;

const handleIcons = (scrollVal) => {
    let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
    arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
    });
});

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
    });
});

const dragging = (e) => {
    if(!isDragging) return;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons(tabsBox.scrollLeft)
}

const dragStop = () => {
    isDragging = false;
    tabsBox.classList.remove("dragging");
}

tabsBox.addEventListener("mousedown", () => isDragging = true);
tabsBox.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);


// Main Introduction (Carousel)



let visibleCloseOBox = document.querySelector(".visible-close-o-box");

let visibleCloseONBox = document.querySelector(".visible-close-o-n-Box");

let visible_MoreProducts = document.querySelector(".visible_MoreProducts");

visibleCloseOBox.addEventListener("click", () => {
    visible_MoreProducts.classList.add("activeMorePro");

    visibleCloseOBox.style.display = "none";
})



let pfAddress = document.querySelector("#pfAddressLogin");
let mainLRBoxh = document.querySelector("#mainLR-boxh");
let exitRL = document.querySelector(".exit-r-l");

pfAddress.addEventListener("click", () => {
    mainLRBoxh.classList.add("mainLRBoxhActive");
})

exitRL.addEventListener("click", () => {
    mainLRBoxh.classList.remove("mainLRBoxhActive");
})




let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "grid";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(var(--purple-ft) ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
  
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;


let reSHeaderMenu = document.querySelector(".re-sHeader-menu");
let mnButHeadMenu = document.querySelector(".mn-but-head-menu");
let mnButHeadClose = document.querySelector(".mn-but-head-close");

reSHeaderMenu.addEventListener("click", () => {
    mnButHeadMenu.classList.add("mnButHeadMenuActive");

    mnButHeadMenu.style.zIndex = "5000"
})

mnButHeadClose.addEventListener("click", () => {
    mnButHeadMenu.classList.remove("mnButHeadMenuActive");
})



//

let helpWindowBox = document.querySelector(".help-window-box");
let helpWindowsProgressMenu = document.querySelector(".help-windows-progress-menu");
let hWPM_cancel = document.querySelector("#hWPM-cancel");

helpWindowBox.addEventListener("click", () => {
    helpWindowsProgressMenu.classList.toggle("helpWindowsProgressMenuActive");
})

hWPM_cancel.addEventListener("click", () => {
    helpWindowsProgressMenu.classList.remove("helpWindowsProgressMenuActive");
})

function OpenChat() {
    var helpWindowsProgressMenuTime = document.querySelector('.help-windows-progress-menu');
    helpWindowsProgressMenuTime.classList.add('helpWindowsProgressMenuActive');
    setTimeout(function() {
        helpWindowsProgressMenuTime.style.opacity = "100%";
    }, 100);
}

window.onload = function() {
    setTimeout(OpenChat, 2000);
};



//

let catalog = document.querySelector("#catalog");
let menuCatalog = document.querySelector(".menu-catalog");
let categoryClose = document.querySelector("#category-close");
let directoryC = document.querySelector("#directoryC");
let categoryCloseF = document.querySelector("#category-close-f");


catalog.addEventListener("click", () => {
    menuCatalog.classList.toggle("menuCatalogActive");
})

categoryClose.addEventListener("click", () => {
    menuCatalog.classList.remove("menuCatalogActive");
})

directoryC.addEventListener("click", () => {
    menuCatalog.classList.toggle("menuCatalogActive");
})

categoryCloseF.addEventListener("click", () => {
    menuCatalog.classList.remove("menuCatalogActive");
})



//