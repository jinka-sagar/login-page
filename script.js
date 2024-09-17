const sagar = document.getElementById('text1')
const boby = document.getElementById('psw')

function login() {
  if (sagar.value === "manojkumar" || sagar.value === "9398084137") {
    if(boby.value==="124578"||boby.value==="word"){
      window.location.href = ("https://jinka-sagar.github.io/custom-template/");
    } 
  } else {
    alert("Re-enter the password")
  }
}
