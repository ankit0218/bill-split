// function inc(){
//     let number= document.getElementById("num").value;
//     number++;
//     document.getElementById('num').value= number;

// }

// function dec(){
//     let number= document.getElementById("num").value;
//     number--;
//     document.getElementById('num').value= number;

// }


let final = 0;

const calculateBill = (tipPercent = 0) => {
	let billAmount = Number(document.getElementById('bill-input').value)
	let totalperson = Number(document.getElementById('people-input').value)
	if(tipPercent != 0)
	final = tipPercent;
	let tipAmount = (final/100) * billAmount
	billAmount += tipAmount

	let tipAmountPerPerson = tipAmount / totalperson
	let totalPerPerson = billAmount / totalperson
	document.getElementById('tip-per-person').innerText = `₹ ${tipAmountPerPerson.toFixed(2)}`
	document.getElementById('total-per-person').innerText = `₹ ${totalPerPerson.toFixed(2)}`
}

const reset = () => {
	document.getElementById('bill-input').value = ''
	document.getElementById('people-input').value = '1'
	document.getElementById('tip-per-person').innerText = `₹ 0.00`
	document.getElementById('total-per-person').innerText = `₹ 0.00`
	final = 0
}
