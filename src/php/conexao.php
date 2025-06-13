<?php


$usuario = 'root';
$senha = '';
$database = 'login_TCC';
$host = 'localhost';

$mysqli = new mysqli($host, $usuario, $senha, $database);

if($mysqli->error){
    die("falha ao conecnta ao bancos de dados: " . $mysqli->error);
}