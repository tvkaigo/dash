(function(){
  const refresh=el=>el.classList.toggle('date-has-value',Boolean(el.value));
  const refreshAll=root=>{
    if(!root||!root.querySelectorAll)return;
    root.querySelectorAll('input[type="date"]').forEach(refresh);
  };
  refreshAll(document);
  document.addEventListener('input',e=>{if(e.target.matches&&e.target.matches('input[type="date"]'))refresh(e.target)},true);
  document.addEventListener('change',e=>{if(e.target.matches&&e.target.matches('input[type="date"]'))refresh(e.target)},true);
  new MutationObserver(ms=>ms.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1){if(n.matches&&n.matches('input[type="date"]'))refresh(n);refreshAll(n)}}))).observe(document.body,{childList:true,subtree:true});
})();
