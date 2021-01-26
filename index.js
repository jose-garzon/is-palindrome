const inputPalindrome = document.getElementById('palindrome');

function isPalindrome(str) {
	function cleanStr(str) {
		return str.toLowerCase().trim().replace(/\s/g, '');
	}
	function reverseStr(cleanString) {
		return cleanString.split('').reverse().join('');
	}

	const clean = cleanStr(str);
	const reverse = reverseStr(clean);

	return clean === reverse ? true : false;
}

inputPalindrome.oninput = ({ target: { value } }) => {
	inputPalindrome.classList.remove('success');
	inputPalindrome.classList.remove('error');
	if (value) {
		let palindrome = isPalindrome(value);
		console.log(palindrome);
		if (palindrome) {
			inputPalindrome.classList.add('success');
		} else {
			inputPalindrome.classList.add('error');
		}
	}
};
