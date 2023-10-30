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
    $('#customerId').val(genNextCustomerId());

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
    $('#customerId').val(genNextCustomerId());

});

// customer delete
$('#customer-delete').on("click", () => {
    let customer_id = $("#customerId").val();

    let index = customer_db.findIndex(item => item.customer_id === customer_id);

    customer_db.splice(index, 1);

    loadCustomerData();

    $('#customer-reset').click();
    $('#customerId').val(genNextCustomerId());
});

// customer details load
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

const genNextCustomerId = () => {

    if (customer_db.length === 0) {
        return "CID-0001";
    } else {
        const lastCustomerID = customer_db[customer_db.length - 1].customer_id;

        const lastCustomerNumber = parseInt(lastCustomerID.split('-')[1]);
        let nextCustomerNumber = lastCustomerNumber + 1;
        nextCustomerNumber = nextCustomerNumber.toString();


        if (nextCustomerNumber.length === 1){
            return `CID-000${nextCustomerNumber}`;
        } else if(nextCustomerNumber.length === 2) {
            return`CID-00${nextCustomerNumber}`;
        } else if(nextCustomerNumber.length === 3){
            return`CID-0${nextCustomerNumber}`;
        }else {
            return`CID-${nextCustomerNumber}`;
        }
    }
}

$('#navigation-bar>li').eq(1).on('click', () => {
    $('#customerId').val(genNextCustomerId());
})

$('#link-customers').on('click', () => {
    $('#customerId').val(genNextCustomerId());
})
