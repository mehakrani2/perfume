function search(){
    let filter = document.getElementById("search1").value.toUpperCase();
    let items = document.querySelectorAll("#child1");
    let l = document.querySelectorAll("#pron");

    for(var i = 0;i<=l.length;i++){
        let a = items[i].querySelectorAll("#pron")[0];
        let value = a.innerHTML|| a.innerText || a.textContent;

        if(value.toUpperCase().indexOf(filter) > -1) {
            items[i].style.display="";
        }
        else{
            items[i].style.display="none";
        }
    }
}