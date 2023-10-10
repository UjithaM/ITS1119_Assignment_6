$('#item').css('display','none');
$('#order').css('display','none');
$('#place_order').css('display','none');

$('#navigation-bar>li').eq(0).on('click', () => {
    $('#customer').css('display','block');
    $('#item').css('display','none');
    $('#order').css('display','none');
    $('#place_order').css('display','none');
})

$('#navigation-bar>li').eq(1).on('click', () => {
    $('#item').css('display','block');
    $('#customer').css('display','none');
    $('#order').css('display','none');
    $('#place_order').css('display','none');
})

$('#navigation-bar>li').eq(2).on('click', () => {
    $('#order').css('display','block');
    $('#item').css('display','none');
    $('#customer').css('display','none');
    $('#place_order').css('display','none');
})

$('#navigation-bar>li').eq(3).on('click', () => {
    $('#place_order').css('display','block');
    $('#order').css('display','none');
    $('#item').css('display','none');
    $('#customer').css('display','none');
})