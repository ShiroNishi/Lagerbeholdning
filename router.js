updateView()
function updateView(){
    let loadedPage = ''
    let header = /*HTML*/ `
        <div>${setHeader()}</div>
        ` 


    document.getElementById('app').innerHTML = header
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
            <button>Matkjeller</button>
            <button>Vaskekjeller</button>
        </header>
        `
    }

    return html + subheader
}