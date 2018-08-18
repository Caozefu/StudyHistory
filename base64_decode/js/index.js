$('#btnEncode').click(function() {
    $('#target').val(codeHandler.encode($('#code').val(),'base64'));
});
$('#btnDecode').click(function() {
    $('#target').val(codeHandler.decode($('#code').val(),'base64'));
});