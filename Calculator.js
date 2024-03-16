function clearLastCharacter() {
    var inputField = document.getElementsByName('op')[0];
    inputField.value = inputField.value.slice(0, -1);
}