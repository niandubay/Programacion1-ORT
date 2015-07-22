// this

$(".boton").click(funcionDeTodosLosBotones);

function funcionDeTodosLosBotones(){
    //$(".boton").val("Cliqueado");
    $(this).val("Cliqueado");
    // this hace referencia al elemento que disparó el evento.
}