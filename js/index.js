function todoList()
{
	var btnAdd=document.getElementById("btnAdd");
	btnAdd.onclick = function()
	{
		var name = document.getElementById("name").value;
		var status = false;
		if(_.isEmpty(name))
		{
			alert("Bạn chưa nhập công việc");
		}
		if(name)
        {
        	let works = localStorage.getItem('works') ? JSON.parse(localStorage.getItem('works')) :  [] ;
        	works.push({
        		Name:name,
        		Status:status
        	});
        	localStorage.setItem('works',JSON.stringify(works));
        	renderListWork();       	
	    }
	}
}
function renderListWork()
{
	let works = localStorage.getItem('works') ? JSON.parse(localStorage.getItem('works')) :  [] ;
	if(works.length==0)
	{
		document.getElementById("list-work").style.display='none';
		return false;
	}
	document.getElementById("list-work").style.display='block';
	let tableContent=``;
	works.forEach((work,index)=>{
		let id=index;
		index++;
		let a=``;
		let b=``;
		let c=``;
		if(work.Status)
		{
			a=`<i class="fas fa-check"></i>`;
			b=`text-decoration: line-through`;
			c=`background-color: red`;
		}
        tableContent += `
            <tr style="${c}">
                <td class="check">${a}</td>
	    		<td style = "${b}">
	    		<a href="#" onclick='ChangeStatus(${id})'>${work.Name}</a>
	    		</td>
	    		<td>
	    		<a href="#" onclick='deleteWork(${id})'>Delete</a>
	    		</td>
	    	</tr>
            `;
    });
    document.getElementById("grid-work").innerHTML=tableContent;
}
function deleteWork(id)
{
	let works = localStorage.getItem('works') ? JSON.parse(localStorage.getItem('works')) :  [] ;
    works.splice(id,1);
	localStorage.setItem('works',JSON.stringify(works));
	renderListWork();
}
function ChangeStatus(id)
{
	let works = localStorage.getItem('works') ? JSON.parse(localStorage.getItem('works')) :  [] ;
	if(works[id].Status==false)
	{
		works[id].Status = true;
	}
	else if (works[id].Status== true)
	{
		works[id].Status = false;
	}
	localStorage.setItem('works',JSON.stringify(works));
	renderListWork();

}
todoList();