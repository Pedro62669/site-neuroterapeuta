<?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtém os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $mensagem = $_POST["mensagem"];
    
    // Configurações do email
    $destinatario = "pedrohenrique62669@gmail.com"; // Substitua pelo email correto
    $assunto = "Novo contato pelo site - $nome";
    
    // Conteúdo do email
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Telefone: $telefone\n\n";
    $corpo_email .= "Mensagem:\n$mensagem";
    
    // Headers do email
    $headers = "From: $email" . "\r\n";
    $headers .= "Reply-To: $email" . "\r\n";
    
    // Tenta enviar o email
    if (mail($destinatario, $assunto, $corpo_email, $headers)) {
        // Redireciona com mensagem de sucesso
        header("Location: index.html?mensagem=enviado#contato");
        exit;
    } else {
        // Redireciona com mensagem de erro
        header("Location: index.html?mensagem=erro#contato");
        exit;
    }
} else {
    // Se alguém acessar este arquivo diretamente, redireciona para a home
    header("Location: index.html");
    exit;
}
?> 