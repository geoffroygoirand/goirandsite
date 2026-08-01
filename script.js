const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const form=document.querySelector('form[name="contact"]');
const status=document.querySelector('#form-status');
form?.addEventListener('submit',async(event)=>{
  event.preventDefault();
  const button=form.querySelector('button[type="submit"]');
  if(status) status.textContent='Envoi en cours…';
  if(button) button.disabled=true;
  try{
    const body=new URLSearchParams(new FormData(form)).toString();
    const response=await fetch('/',{
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body
    });
    if(!response.ok) throw new Error(`HTTP ${response.status}`);
    form.reset();
    if(status) status.textContent='Votre message a bien été envoyé.';
  }catch(error){
    console.error(error);
    if(status) status.textContent='L’envoi a échoué. Vous pouvez écrire directement à geoffroy.goirand@gmail.com.';
  }finally{
    if(button) button.disabled=false;
  }
});
