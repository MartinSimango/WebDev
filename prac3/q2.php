<?php

if(isset($_POST["name"])){
if (empty($_POST["name"]))
	echo "Please enter something";
else
	echo strtoupper($_POST["name"]);
}




?>
