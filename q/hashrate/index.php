<?php
$info = file_get_contents("http://explorer.securuscoin.org:14115/getinfo");
echo ($info, ["height"]);

//print_r($hashrate);
