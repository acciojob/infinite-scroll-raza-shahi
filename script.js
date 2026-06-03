//your code here!
const list  = document.getElementById('infi-list');
let itemCounter = 10;
function addMoreItem(count){
	for(let i=0;i<count;i++){
		itemCounter++;
		const newItem = document.createElement('li');
		newItem.innerText = `Item ${itemCounter}`;
		list.appendChild(newItem);
	}
}

list.addEventListener('scroll',()=>{
	if(list.scrollTop + list.clientHeight >= list.scrollHeight - 1){
		addMoreItem(2);
	}
})
