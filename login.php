<?php
$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

if($usuario === "suporte" && $senha === "1234") {
    // Login correto, redireciona
    header("Location: Admin.html");
    exit();
} else {
    echo "Usuário ou senha incorretos!";
}
?>
