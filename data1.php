<?php
require 'vendor/autoload.php';

use PhpOffice\PhpSpreadsheet\Spreadsheet;
$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
$reader->setReadDataOnly(TRUE);
$reader->setLoadSheetsOnly(["Tabell, totalt"]);
$spreadsheet = $reader->load("data2.xlsx");
$worksheet = $spreadsheet->getActiveSheet();


$enskildautbildnigsanordnare = $worksheet->getCell('A52')->getValue();
$konstnärligahögskolor = $worksheet->getCell('A47')->getValue();
$högskola = $worksheet->getCell('A29')->getValue();
$universitet = $worksheet->getCell('A9')->getValue();

$row10 = 10 ;
while($row10 <= 27){
    $data1 [] = (int)$worksheet->getCell('AV' . $row10)->getValue().',';
    $row10++;
}

$row30 = 30;
while($row30 <= 45){
    $data2 []= (int)$worksheet->getCell('AV' . $row30)->getValue();
    $row30++;
}

$row48 = 48 ;
while($row48 <= 50){
    $data3[]= (int)$worksheet->getCell('AV' . $row48)->getValue();
    $row48++;
}

$row53 = 53;
while($row53 <= 67){
    $data4 []= (int)$worksheet->getCell('AV' . $row53)->getValue();
    $row53++;
}

$value = [array_sum($data1), array_sum($data2), array_sum($data3), array_sum($data4)];
$label = [$universitet, $högskola, $konstnärligahögskolor, $enskildautbildnigsanordnare];

$data = [
    "values"=> $value,
    "labels"=> $label, 
    "type"=> 'pie'
]; 

  $ut = json_encode($data); 
  echo "[{$ut}]";




/*
$dataArray1 = json_encode($spreadsheet->getActiveSheet()->rangeToArray('A10:A27'));
$output1 = str_replace('[', '', $dataArray1 );
$output2 = str_replace(']', '', $output1 );
$klr=utf8_encode($output2);
$klr= explode(',', $klr);

$heh=[1,2,3,4,6,6,5,4,6,7,8,3,3,5,5,5,7,7];

$data = [
    "values"=> $heh,
    "labels"=> $klr,
    "type"=> 'pie'
]; 

  $ut = json_encode($data); 
  echo "[{$ut}]";
*/
/*
$konstnärligahögskolor = $worksheet->getCell('A47')->getValue();
$row48 = 48 ;
while($row48 <= 50){
    $data1= (int)$worksheet->getCell('AV' . $row48)->getValue();
    $row48++;
}

$row10 = 10 ;
while($row10 <= 27){
    $da [] = $worksheet->getCell('A' . $row10)->getValue();
    $row10++;
}

$row10 = 10;
while($row10 <= 27){
    $data = $worksheet->getCell('A' . $row10)->getValue().',';
    $row10++;
}

$row10 = 10 ;
while($row10 <= 27){
    $da [] = (int)$worksheet->getCell('AV' . $row10)->getValue().',';
    $row10++;
}

$högskola = $worksheet->getCell('A29')->getValue();
$row30 = 30 ;
while($row30 <= 45){
    $data1= (int)$worksheet->getCell('AV' . $row30)->getValue();
    $row30++;
}

$konstnärligahögskolor = $worksheet->getCell('A47')->getValue();
$row48 = 48 ;
while($row48 <= 50){
    $data1= (int)$worksheet->getCell('AV' . $row48)->getValue();
    $row48++;
}

$enskildautbildnigsanordnare = $worksheet->getCell('A52')->getValue();
$row53 = 53;
while($row53 <= 67){
    $data1= (int)$worksheet->getCell('AV' . $row53)->getValue();
    $row53++;
}


$data = [
    "values"=> $klar,
    "labels"=> $klr,
    "type"=> 'pie'
]; 

  $ut = json_encode($data); 
  echo "{$ut}";



$dataArray1 = $spreadsheet->getActiveSheet()-> toArray();


$dataArray2 = $spreadsheet->getActiveSheet()->rangeToArray('AV10:AV67');
//var_dump($dataArray2[57]);
*/



/*
$dataArray1 = json_encode($spreadsheet->getActiveSheet()->rangeToArray('A10:A67'));
$output1 = str_replace('[', '', $dataArray1 );
$output2 = str_replace(']', '', $output1 );
$output3 = str_replace(',null', '', $output2 );
$klr= explode(',', $output3 );

$dataArray2 = json_encode($spreadsheet->getActiveSheet()->rangeToArray('AV10:AV67'));
$ht= str_replace('[', '', $dataArray2 );
$jdj= str_replace(']', '', $ht );
$fss= str_replace('null', '0', $jdj );
$hh= str_replace('"."', '0', $fss );

$klar= explode(',', $hh );
foreach ($klar as $value ) {
    $hej [] = $value.',';
  }
*/

?>