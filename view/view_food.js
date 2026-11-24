function foodStorageHome(){
    const categories = model.foodCategories.sort();
    const selectedCategories = model.viewState.selectedFoodCategories;
    const searchValue = model.viewState.searchFoodItem.replace(/[&<>"']/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
    })[character]);
    let html = /*HTML*/ `
        <div class="food-layout">
            <aside class="food-filter">
                <h2>Filtrer</h2>
                <fieldset>
                    <legend>Kategori</legend>
                    ${categories.map(category => /*HTML*/ `
                        <label class="food-filter-option">
                            <input
                                type="checkbox"
                                value="${category}"
                                ${selectedCategories.includes(category) ? 'checked' : ''}
                                onchange="setFoodCategory(this.value, this.checked)">
                            ${category}
                        </label>
                    `).join('')}
                </fieldset>
                <fieldset>
                    <legend>Butikk</legend>
                    
                </fieldset>
            </aside>
            <main class="food-content">
                <input
                    class="food-search"
                    placeholder="Søk i matbeholdning"
                    value="${searchValue}"
                    oninput="searchFood(this.value)">
                <div id="food-grid-container">${showFoodAll()}</div>
            </main>
        </div>
    `
    return html
}

function showFoodAll(){
    let html = '';
    const searchTerm = model.viewState.searchFoodItem.trim().toLocaleLowerCase();
    const selectedCategories = model.viewState.selectedFoodCategories;
    const visibleFood = model.food.filter(item => {
        const matchesSearch = !searchTerm || [
            item.title,
            item.brand,
            item.store,
            ...item.category,
        ].some(value => value.toLocaleLowerCase().includes(searchTerm));
        const matchesCategory = selectedCategories.length === 0
            || selectedCategories.some(category => item.category.includes(category));
        return matchesSearch && matchesCategory;
    });

    for (let item of visibleFood){
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

function searchFood(input){
    model.viewState.searchFoodItem = input;
    updateFoodGrid();
}

function setFoodCategory(category, isSelected){
    const selectedCategories = model.viewState.selectedFoodCategories;
    if (isSelected && !selectedCategories.includes(category)) {
        selectedCategories.push(category);
    } else if (!isSelected) {
        model.viewState.selectedFoodCategories =
            selectedCategories.filter(selectedCategory => selectedCategory !== category);
    }
    updateFoodGrid();
}

function updateFoodGrid(){
    document.querySelector('#food-grid-container').innerHTML = showFoodAll();
}