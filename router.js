function updateView(){
    let loadedPage = ''
    let header = /*HTML*/ `
        <div>${setHeader()}</div>
        ` 
    if (model.app.currentPage == 'foodStorage') loadedPage = foodStorageHome();
    if (model.app.currentPage == 'washStorage') loadedPage = washStorageHome();
    if (model.app.currentPage == 'shopList') loadedPage = shopListHome();

    document.getElementById('app').innerHTML = header + loadedPage
}

function setHeader(){
    const currentHeader = model.app.currentHeader
    let subheader = ''
    let html = /*HTML*/ `
        <header id="header-select">
                <h1 class="category-page"
                onclick="changeHeader('lager')">Lagerbeholdning</h1>
                <h1 class="category-page"
                onclick="changeHeader('liste')">Handleliste</h1>
        </header>
    `
    if(currentHeader === 'Lagerbeholdning'){
        subheader = /*HTML*/ `
        <header>
            <button onclick="setPage('mat')">Matkjeller</button>
            <button onclick="setPage('vask')">Vaskekjeller</button>
        </header>
        `
    }

    return html + subheader
}

function changeHeader(display){
    if (display == 'lager') {
        model.app.currentHeader = 'Lagerbeholdning';
        model.app.currentPage = 'foodStorage';
    }
    if (display == 'liste') {
        model.app.currentHeader = 'Handleliste';
        model.app.currentPage = 'shopList'
    }
    updateView() 
}

function setPage(type){
    if (type == 'mat') model.app.currentPage = 'foodStorage'
    if (type == 'vask') model.app.currentPage = 'washStorage'
    updateView()
}