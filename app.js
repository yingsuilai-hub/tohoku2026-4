
document.querySelectorAll('[data-copy]').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    await navigator.clipboard.writeText(btn.dataset.copy);
    btn.textContent='已複製';
    setTimeout(()=>btn.textContent='複製網址',1200);
  });
});
