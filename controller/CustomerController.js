import {CustomerModel} from "../model/CustomerModel.js";
import {customer_db} from "../db/db.js";


// submit
$('#customer_submit').on("click", () => {
    let customer_id = $('#customerId').val();
    let full_name = $('#fullName').val();
    let address = $('#address').val();

    let customer_obj = new CustomerModel(customer_id, full_name, address);

    customer_db.push(customer_obj);
    loadCustomerData();
    $('#customer-reset').click();

});

// update
$('#customer_update').on("click", () => {
    let customer_id = $('#customerId').val();
    let full_name = $('#fullName').val();
    let address = $('#address').val();

    let customer_obj = new CustomerModel(customer_id, full_name, address);

    let index = customer_db.findIndex(item => item.customer_id === customer_id);

    customer_db[index] = customer_obj;

    loadCustomerData();

    $('#customer-reset').click();

});

$('#customer-table-body').on("click", "tr", function() {
    let customer_id = $(this).find(".customer_id").text();
    let full_name = $(this).find(".full_name").text();
    let address = $(this).find(".address").text();

    $('#customerId').val(customer_id);
    $('#fullName').val(full_name);
    $('#address').val(address);

});
const loadCustomerData = () => {
    $('#customer-table-body').empty(); // make tbody empty
    customer_db.map((item, index) => {
        let record = `<tr><td class="customer_id">${item.customer_id}</td><td class="full_name">${item.full_name}</td><td class="address">${item.address}</td></tr>`;
        $("#customer-table-body").append(record);
    });
};