export class OrderModel {
    constructor(orderId, date, customerId, orderDetailsArr) {
        this.orderID = orderId;
        this.date = date;
        this.customerId = customerId;
        this.orderDetailsArr = orderDetailsArr;
    }
}