const input  = document.getElementById("item");

input.addEventListener('input',(event) => {
    event.preventDefault();
    console.log(event.target.value)
})




