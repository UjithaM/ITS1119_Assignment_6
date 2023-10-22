import {ItemModel} from "../model/ItemModel.js";
import {item_db} from "../db/db.js";

// item submit
$('#item-submit').on("click", () => {
    console.log("cliccc");
    let item_id = $('#itemId').val();
    let description = $('#description').val();
    let unit_price = $('#unit-price').val();
    let qty = $('#qty').val();

    let item_obj = new ItemModel(item_id, description, unit_price, qty);

    item_db.push(item_obj);

    console.log(item_obj);

    loadItemData();

    $('#item-reset').click();
});

const loadItemData = () => {
    $('#iem-table-body').empty(); // make tbody empty
    item_db.map((item, index) => {
        let record = `<tr><td class="item_id">${item.item_id}</td><td class="description">${item.description}</td><td class="unit_price">${item.unit_price}</td><td class="qty">${item.qty}</td></tr>`;
        $("#iem-table-body").append(record);
    });
};