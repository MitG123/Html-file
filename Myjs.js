const keys = document.querySelectorAll('.key'); 
const display_input = document.querySelector('.input'); 
const display_output = document.querySelector('.output'); 

let input = ""; 

for (let key of keys) {
    const value = key.dataset.key; 

    key.addEventListener('click', () => {
        if (value === "clear") {
           
            input = "";
            display_input.innerHTML = "";
            display_output.innerHTML = "";
        } 
        else if (value === "=") {
            
            try {
                let result = eval(input);
                display_output.innerHTML = result;
            } catch (error) {
                display_output.innerHTML = "Error"; 
            }
        } 
        else {
            
            input += value;
            display_input.innerHTML = input; 
        }
    });
}
