let phrase = "This -- is a wanna-be string with some and -";

function truncateString(str, num)
{
	var subPhrase = '';
	var letterAt  = '';
	
	while(num > 0) {

		subPhrase = str.substr(0, num);
		letterAt = subPhrase.slice(-1);		

		if(/\s/.test(letterAt)) {
			str = subPhrase.trim() + '...';
			break;
		} else if(num < 3) {
			str = str.substr(0, 2).trim().replace('-', '') + '...';
			break;
		} else {
			num--;
		}
	}   
	
	return str;
}

console.log(truncateString(phrase, 6));