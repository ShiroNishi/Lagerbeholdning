function foodStorageHome(){
    let html = /*HTML*/ `
        <div id="food-grid-container">
            ${showFoodAll()}
        </div>



    `
    return html
}



function showFoodAll(){
    const allFood = model.food
    let html = '';
    for (let item of allFood){
        html += /*HTML*/ `
            <div class="food-item">
                <h3>${item.title}</h3>
                <img class="preview-img" src="${item.img}">
                <p>Antall: ${item.amount}</p>
                <p>Pris: ${item.price} kr</p>
                <p>Merke: ${item.brand}</p>
                <p>Butikk: ${item.store}</p>

            </div>
        `
    }
    return html
}