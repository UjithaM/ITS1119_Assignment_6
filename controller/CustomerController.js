import {CustomerModel} from "../model/CustomerModel.js";
import {customer_db} from "../db/db.js";


// submit
$('#customer_submit').on("click", () => {
    let customer_id = $('#customerId').val();
    let full_name = $('#fullName').val();
    let address = $('#address').val();

    let customer_obj = new CustomerModel(customer_id, full_name, address);

    customer_db.push(customer_obj);

    $('#customer-reset').click();
});