
$(document).ready( function () {
    $('#main').DataTable({
        paging: false
    });
});

function del_item(name){
    var result = confirm("Are you sure you want to delete this item?");
    if(result){
        $.ajax({
            type: "POST",
            url: "/delete",
            data: {
                name:name
            } ,
            success: function(data) {
                $('.loading').css('display','block');
                setTimeout(function() 
                {
                    location.reload();
                    $('.loading').css('display','none');
                }, 1000);
            }
        });
    }
}