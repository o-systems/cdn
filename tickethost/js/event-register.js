const registerForm = document.getElementById('modal-event-register');
const inputs = document.querySelectorAll('input')

registerForm.addEventListener('submit',(e)=>{
  const form = new FormData();
  for(const input of inputs){
    const name = input.name;
    const value = input.value
    form.append(name, value)
  }

  fetch("",{
    method: 'POST',
    X
  })
})