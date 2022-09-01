document.querySelector('.card-number-input').oninput = () => {
    let numberInput = document.querySelector('.card-number-input').value

    let makeSpaces = numberInput.match(/.{1,4}/g)
    let result = makeSpaces.join(' ')

    document.querySelector('.card-number-box').innerText = result;

    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
}
// document.querySelector('.card-number-input').onmouseleave = () => {
//     let numberErrorInput = document.querySelector('.card-number-input').value
//     function containsAnyLetter(str) {
//         return /[a-zA-Z]/.test(str);
//     }    
//     if (containsAnyLetter(numberErrorInput)) {
//         console.log('✅ string contains a letter');
//     } else {
//         console.log('⛔️ string does NOT contain a letter');
//     }    
// }


document.querySelector('.card-holder-input').oninput = () => {
    const holderInput = document.querySelector('.card-holder-input').value
    document.querySelector('.card-holder-name').innerText = holderInput;
}
document.querySelector('.month-input').oninput = () => {
    const monthInput = document.querySelector('.month-input').value
    document.querySelector('.exp-month').innerText = monthInput;
}
document.querySelector('.year-input').oninput = () => {
    const yearInput = document.querySelector('.year-input').value
    document.querySelector('.exp-year').innerText = yearInput;
}
document.querySelector('.cvv-input').onmouseenter = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)'
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)'
}
document.querySelector('.cvv-input').onmouseleave = () => {
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)'
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)'
}
document.querySelector('.cvv-input').oninput = () => {
    const cvvInput = document.querySelector('.cvv-input').value
    document.querySelector('.cvv-box').innerText = cvvInput;

    if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);
}