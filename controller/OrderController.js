import {customer_db, item_db, order_db} from "../db/db.js";
import {OrderModel} from "../model/OrderModel.js";
import {OrderDetailsModel} from "../model/OrderDetailsModel.js";

$('#order-update-button').css('display','none');
$('#order-delete-button').css('display','none');
$('#desc').prop('disabled', true);
$('#placeOrderQtyOnHand').prop('disabled', true);
$('#place_order_unit_price').prop('disabled', true);
$('#place_order_customer_name').prop('disabled', true);


var orderDetailsArr =[];

$('#link-orders').on('click', () => {
    placeOrderClicked();
});



$('#navigation-bar>li').eq(3).on('click', () => {
    placeOrderClicked();
});
$('#order-place-order-button').on('click', () => {

    let order_obj = new OrderModel("OID-0022", "","","");
    order_db.push(order_obj);

});

$('#add-cart-button').on('click', () => {
    let itemId = $('#itemIdSelect').val();
    let itemQuantity = $('#place_order_qty').val();
    let unitPrice = $('#place_order_unit_price').val();
    let description = $('#desc').val();


    for (const orderDetailsArrElement of orderDetailsArr) {
        if (orderDetailsArrElement.itemId === itemId) {
            orderDetailsArrElement.quantity = itemQuantity;

            $('#cart-table').empty();

            for (const orderDetailsArrElement of orderDetailsArr) {
                let record = `<tr><td class="Item Id">${orderDetailsArrElement.itemId}</td><td class="Description">${orderDetailsArrElement.description}</td><td class="Unit Price">${orderDetailsArrElement.unitPrice}</td><td class="Qty">${orderDetailsArrElement.quantity}</td></tr>`;
                $("#cart-table").append(record);
            }
            let total = 0;

            for (const orderDetailsArrElement of orderDetailsArr) {
                total += (orderDetailsArrElement.unitPrice * orderDetailsArrElement.quantity)
            }
            $('#net-total').text(total);
            $('#sub-total').text(calculateDiscountedPrice(total , $('#discount').val()));
            return;
        }
    }

    let order_obj = new OrderDetailsModel(itemId, itemQuantity, unitPrice, description);

    orderDetailsArr.push(order_obj);

    $('#cart-table').empty();

    for (const orderDetailsArrElement of orderDetailsArr) {
        let record = `<tr><td class="Item Id">${orderDetailsArrElement.itemId}</td><td class="Description">${orderDetailsArrElement.description}</td><td class="Unit Price">${orderDetailsArrElement.unitPrice}</td><td class="Qty">${orderDetailsArrElement.quantity}</td></tr>`;
        $("#cart-table").append(record);
    }

    let total = 0;

    for (const orderDetailsArrElement of orderDetailsArr) {
        total += (orderDetailsArrElement.unitPrice * orderDetailsArrElement.quantity)
    }
    $('#net-total').text(total);
    $('#sub-total').text(calculateDiscountedPrice(total , $('#discount').val()));

});

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
const genNextOrderId = () => {
    if (order_db.length === 0) {
        return "OID-0001";
    } else {
        // Find the last order ID in the array
        const lastOrderId = order_db[order_db.length - 1].orderID;

        // Extract the numeric part and increment it
        const lastOrderNumber = parseInt(lastOrderId.split('-')[1]);
        let nextOrderNumber = lastOrderNumber + 1;
        nextOrderNumber = nextOrderNumber.toString();


        if (nextOrderNumber.toString().length === 1){
            return `OID-000${nextOrderNumber.toString()}`;
        } else if(nextOrderNumber.toString().length === 2) {
            return`OID-00${nextOrderNumber.toString()}`;
        } else if(nextOrderNumber.toString().length === 3){
            return`OID-0${nextOrderNumber.toString()}`;
        }else {
            return`OID-${nextOrderNumber.toString()}`;
        }
  }

}

function placeOrderClicked() {
    $('#order_Id').val(genNextOrderId());

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
}
function calculateDiscountedPrice(originalPrice, discountPercentage) {
    console.log(originalPrice);
    if (discountPercentage === null || discountPercentage === 0)return originalPrice;
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
}

$('#discount').on('input', () => {
    $('#sub-total').text(calculateDiscountedPrice($('#net-total').text(), $('#discount').val()));
});