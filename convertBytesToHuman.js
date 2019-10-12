/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

//export default 
export default  function convertBytesToHuman(bytes) {
	let k = 0;
	if((typeof(bytes) != "number") || bytes < 0 )
		{return false;}
	else{
		if(bytes < 1024){
			return bytes + " B";
		}
		else{
			do{
			bytes/=1024;
			k+=1;
		}while(Math.floor(bytes/1024) > 3);
		bytes = (bytes).toFixed(2);


		}
		if((bytes*100)%100 == 0){
			bytes=Math.round(bytes);
		}



	 }
	 switch(k){
	 		case 1:
	 			return bytes + " KB";	
	 		case 2:
	 			return bytes + " MB";
	 		case 3:
	 			return bytes + " GB";
	 		case 4:
	 			return bytes + " TB";
	 		//default:
	 			//return console.log(bytes);				
	 }

}




