function shopListHome(){
    let html = /*HTML*/ `
        <table>
            <tr>
                <th>Produkt</th>
                <th>Antall</th>
                <th>Butikk</th>
                <th>Pris</th>
                <th>Check</th>
            <tr>
            ${addListItems()}

            <td>Total:</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${calcTotalPrice()}</td>

        </table>

    `
    return html
}

function addListItems(){
    let tableItem = '';

    for (let item of model.food){
        if (item.amount <= item.autoRefill){
            tableItem += /*HTML*/ `
                <tr>
                    <td>
                        <img style="height: 50px; width: 50px;" src="${item.img}">
                        ${item.title}
                    </td>
                    <td>${item.amount}</td>
                    <td>${item.store}</td>
                    <td>${item.price.toFixed(2)} kr.</td>
                    <td><input type="checkbox"></td>
                
                </tr>
            `
        }
        //else {
            //    return "Handlelisten er tom"
            //}
        }
    
    return tableItem

}

function calcTotalPrice(){
    let price = 0;
    for (let item of model.food){
        if (!Number.isInteger(item.price)) continue;
        price += item.price
    }

    return price
}