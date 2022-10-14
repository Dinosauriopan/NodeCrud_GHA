function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 32) return true;
    var patron = /[a b c d e f g h i j k l m n ñ o p q r s t u v w x y z A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}

function validarnn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}