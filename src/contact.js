const contactTab = (function() {
function addH1() {
    const content = document.querySelector('#content')
    const h1C = document.createElement('h1');
    h1C.textContent = 'Contact';
    content.appendChild(h1C)
}

return {
    addH1
}
}());

export default contactTab