const checkboxes = document.querySelectorAll(".inbox input[type='checkbox']");
let lastChecked;

function handleCheck(e) {
    //check if the shift key was down and checking in
    let inBentween = false;

    if (e.shiftKey && this.checked) {
        //loop pver checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBentween = !inBentween;
            }
            if (inBentween) {
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener("click", handleCheck));