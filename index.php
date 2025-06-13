<?php 
include('src/php/conexao.php');

if (isset($_POST['email']) && isset($_POST['senha'])) {
    if (strlen($_POST['email']) == 0) {
        echo "Preencha seu email";
    } else if (strlen($_POST['senha']) == 0) {
        echo "Preencha sua senha";
    } else {
        $email = $mysqli->real_escape_string($_POST['email']);
        $senha = $mysqli->real_escape_string($_POST['senha']);

        $sql_code = "SELECT * FROM `users` WHERE email = '$email' AND senha = '$senha'";

        $sql_query = $mysqli->query($sql_code) or die("Falha na execução do código SQL: " . $mysqli->error);

        $quantidade = $sql_query->num_rows;
        if($quantidade == 1){
            $usuario = $sql_query->fetch_assoc();

            if(isset($_SESSION)){
                session_start();
            }

            $_SESSION['id'] = $usuario['id'];
            $_SESSION['nome'] = $usuario['nome'];

            header("Location: pages/login.php");
        } else{
            echo"falha ao logar! email ou senha incorreto";
        }

    }
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
        

        <div class="Content">
            <form action="" method="POST">
                <p>
                    <label for="">E-mail</label>
                    <input type="email" name="email" required>

                </p>
                <p>
                    <label for="">Password</label>
                    <input type="password" name="senha" required>

                </p>

                <button type="submit">Entra</button>
            </form>
        </div>
    </div>
   <script src="src/js/pages/script.js"></script>
   <script type="module" src="src/js/vendor/acquisitions.js"></script>

</body>
</html>