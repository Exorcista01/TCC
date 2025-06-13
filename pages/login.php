<?php
session_start(); // <- Esta linha deve estar no início, antes de qualquer HTML ou echo

// Você pode usar um exemplo assim para testes:
if (!isset($_SESSION['nome'])) {
    $_SESSION['nome'] = '$nome'; // Valor padrão para evitar erro
}
?>





<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- CSS -->
     <link rel="stylesheet" href="/src/styles/vendor/reset.css">
     <link rel="stylesheet" href="/src/styles/pages/styles.css">
    <title>Evisirder</title>
</head>
<body>

    <div class="wrapper">
        


        <p>Bem vindo ao painel,</p> <?php echo $_SESSION['nome']; ?>

    </div>

   <script src="src/js/pages/script.js"></script>
   <script type="module" src="src/js/vendor/acquisitions.js"></script>

</body>
</html>