<?php
require 'vendor/autoload.php';
use PhpOffice\PhpSpreadsheet\Spreadsheet;
$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
$spreadsheet = $reader->load("data1.xlsx");

$worksheet = $spreadsheet->getActiveSheet();

$utbildning1= $worksheet->getCell('A16')->getValue();
$utbildning2= $worksheet->getCell('A28')->getValue();
$utbildning3= $worksheet->getCell('A37')->getValue();
$utbildning4= $worksheet->getCell('A52')->getValue();
$utbildning5= $worksheet->getCell('A64')->getValue();
$utbildning6= $worksheet->getCell('A87')->getValue();
$utbildning7= $worksheet->getCell('A96')->getValue();
$utbildning8= $worksheet->getCell('A125')->getValue();

$plE = (int)$worksheet->getCell('G18')->getValue();
$hkE = (int)$worksheet->getCell('G30')->getValue();
$sjhaE = (int)$worksheet->getCell('G39')->getValue();
$nmdE = (int)$worksheet->getCell('G54')->getValue();
$ttE = (int)$worksheet->getCell('G73')->getValue();
$lsdE =(int) $worksheet->getCell('G89')->getValue();
$hssE = (int)$worksheet->getCell('G102')->getValue();
$tE = (int)$worksheet->getCell('G131')->getValue();

$plT = (int)$worksheet->getCell('I18')->getValue();
$hkT = (int)$worksheet->getCell('I30')->getValue();
$sjhaT = (int)$worksheet->getCell('I39')->getValue();
$nmdT = (int)$worksheet->getCell('I54')->getValue();
$ttT = (int)$worksheet->getCell('I73')->getValue();
$lsdT = (int)$worksheet->getCell('I89')->getValue();
$hssT = (int)$worksheet->getCell('I102')->getValue();
$tT = (int)$worksheet->getCell('I131')->getValue();


$utbildning= [$utbildning1,$utbildning2,$utbildning3,$utbildning4, $utbildning5, $utbildning6, $utbildning7, $utbildning8]; 
$Efterfråga= [$plE,$hkE,$sjhaE,$nmdE, $ttE, $lsdE, $hssE, $tE]; 
$Tillgång= [$plT,$hkT,$sjhaT,$nmdT, $ttT, $lsdT, $hssT, $tT]; 


$trace1 = [
    "x"=> $utbildning,
    "y"=> $Efterfråga,
    "name" => "Efterfrågan",
    "type"=> 'bar'
]; 
  
$trace2 = [
    "x"=> $utbildning,
    "y"=> $Tillgång,
    "name" =>"Tillgång",
    "type"=>"bar"
  ];

  $data = [$trace1, $trace2];

  $ut = json_encode( $data ); 
  echo "{$ut}";




  /*
// Get the highest row number and column letter referenced in the worksheet
$highestRow = $worksheet->getHighestRow(); // e.g. 10

$dataArray = $spreadsheet->getActiveSheet()
    ->rangeToArray(
        'AV8:AV68',     // The worksheet range that we want to retrieve       // Should the array be indexed by cell row and cell column
    );
// var_dump($dataArray);

foreach($dataArray as $x => $x_value) {
    echo "Key=" . $x . ", Value=" . $x_value;
    echo "<br>";
    }
for ($row = 1; $row <= $highestRow; ++$row) {
  echo $worksheet->getCell('G'.$row)->getValue().'<br>';
}

echo '<br><br>' ;
G= efterfråga
I=tillgång
for ($row = 1; $row <= $highestRow; ++$row) {
    echo $worksheet->getCell('I'.$row)->getValue().'<br>';
}
echo '<br><br>' ;

for ($row = 1; $row <= $highestRow; ++$row) {
    echo $worksheet->getCell('A'.$row)->getValue().'<br>';
}*/

?>