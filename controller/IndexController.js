$('#customer').css('display','none');
$('#item').css('display','none');
$('#order').css('display','none');
$('#place_order').css('display','none');

$('#navigation-bar>li').eq(0).on('click', () => {
    $('#home').css('display','block');
    $('#customer').css('display','none');
    $('#item').css('display','none');
    $('#order').css('display','none');
    $('#place_order').css('display','none');
})

$('#navigation-bar>li').eq(1).on('click', () => {
    $('#customer').css('display','block');
    $('#home').css('display','none');
    $('#item').css('display','none');
    $('#order').css('display','none');
    $('#place_order').css('display','none');
})
$('#link-customers').on('click', () => {
    $('#customer').css('display','block');
    $('#home').css('display','none');
    $('#item').css('display','none');
    $('#order').css('display','none');
    $('#place_order').css('display','none');
})

$('#navigation-bar>li').eq(2).on('click', () => {
    $('#item').css('display','block');
    $('#home').css('display','none');
    $('#customer').css('display','none');
    $('#order').css('display','none');
    $('#place_order').css('display','none');
})

$('#link-items').on('click', () => {
    $('#item').css('display','block');
    $('#home').css('display','none');
    $('#customer').css('display','none');
    $('#order').css('display','none');
    $('#place_order').css('display','none');
})


$('#link-orders').on('click', () => {
    $('#place_order').css('display','block');
    $('#home').css('display','none');
    $('#order').css('display','none');
    $('#item').css('display','none');
    $('#customer').css('display','none');
})

$('#navigation-bar>li').eq(3).on('click', () => {
    $('#place_order').css('display','block');
    $('#home').css('display','none');
    $('#order').css('display','none');
    $('#item').css('display','none');
    $('#customer').css('display','none');
})