import {ItemModel} from "../model/ItemModel.js";
import {customer_db, item_db} from "../db/db.js";

// item submit
$('#item-submit').on("click", () => {
    let item_id = $('#itemId').val();
    let description = $('#description').val();
    let unit_price = $('#unit-price').val();
    let qty = $('#qty').val();

    let item_obj = new ItemModel(item_id, description, unit_price, qty);

    item_db.push(item_obj);


    loadItemData();

    $('#item-reset').click();
});

// item update
$('#item-update').on("click", () => {
    let item_id = $('#itemId').val();
    let description = $('#description').val();
    let unit_price = $('#unit-price').val();
    let qty = $('#qty').val();

    let item_obj = new ItemModel(item_id, description, unit_price, qty);

    let index = item_db.findIndex(item => item.item_id === item_id);

    item_db[index] = item_obj;


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

$('#iem-table-body').on("click", "tr", function() {
    let item_id = $(this).find(".item_id").text();
    let description = $(this).find(".description").text();
    let unit_price = $(this).find(".unit_price").text();
    let qty = $(this).find(".qty").text();

    $('#itemId').val(item_id);
    $('#description').val(description);
    $('#unit-price').val(unit_price);
    $('#qty').val(qty);
});