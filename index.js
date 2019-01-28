const inputFirst = document.querySelector('firstname');
const log = document.getElementById('log');

inputFirst.addEventListener('keydown', logKey);
function logKey(e) {
  log.textContent += ` ${e.code}`;

 document.getElementById("outputFirstName").innerHTML()
}








const types = document.getElementByClassName('design-type');
for (let i=0; i < types.lenght; i++){
  const designType = types[i].attributes['data-design-types'].value; 
  types[i].addEventListener('click',function(){
    changeClass(designType)
  });
}

function changeClass(newClass) {
  document.getElementById('design').className = 'wedding-design' + newClass; 
}