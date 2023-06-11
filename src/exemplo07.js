$(document).ready(function(){
    $("#lista_teste").find("lista").each(function(){
        $(this).html($(this).html() + "olá ");
    });
});