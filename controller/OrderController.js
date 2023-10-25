import {CustomerModel} from "../model/CustomerModel.js";
import {customer_db} from "../db/db.js";
import {item_db} from "../db/db.js";

$('#order-update-button').css('display','none');
$('#order-delete-button').css('display','none');
$('#desc').prop('disabled', true);
$('#placeOrderQtyOnHand').prop('disabled', true);
$('#place_order_unit_price').prop('disabled', true);
$('#place_order_customer_name').prop('disabled', true);

$('#navigation-bar>li').eq(3).on('click', () => {
    let currentDate = new Date();
    let formattedDate = currentDate.toISOString().split('T')[0];
    $('#orderDate').val(formattedDate);

    $('#customerIdSelect').empty();
    customer_db.map((item, index) => {
        let record = `<option>${item.customer_id}</option>`;
        $("#customerIdSelect").append(record);
    });
    $("#customerIdSelect").append(`<option selected>select the customer</option>`);
    $('#itemIdSelect').empty();
    item_db.map((item, index) => {
        let record = `<option>${item.item_id}</option>`;
        $("#itemIdSelect").append(record);
    });
    $("#itemIdSelect").append(`<option selected>select the Item</option>`);
})

$('#itemIdSelect').on('change', () => {
    let itemId = $('#itemIdSelect').val();
    let index = item_db.findIndex(item => item.item_id === itemId);
    $("#placeOrderQtyOnHand").val(item_db[index].qty);
    $("#desc").val(item_db[index].description);
    $("#place_order_unit_price").val(item_db[index].unit_price);
});

$('#customerIdSelect').on('change', () => {
    let customerId = $('#customerIdSelect').val();
    let index = customer_db.findIndex(item => item.customer_id === customerId);
    $("#place_order_customer_name").val(customer_db[index].full_name);
});