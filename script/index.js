const newTodo = document.querySelector(".newTodo");
const list = document.querySelector(".todoList")

newTodo.focus()

let x = 0;
function createElement(){
    x++
    const task = document.createElement("li")
    task.setAttribute("class", "todo")
    task.innerHTML = `
    
    <label for="check${x}" class="checkContainer">
        <input type="checkbox" id="check${x}">
        <div class="border">
            <div class="costume"></div>
        </div>
    </label>
    <p class="todoPara">${newTodo.value}</p>

    <img src="images/icon-cross.svg" class="remove">
    
    `;
    list.prepend(task);
    newTodo.value=""
}
document.addEventListener("keydown", function(e){
    if(e.key==="Enter"&&newTodo.value.length>2){
        createElement()
        const checks = document.querySelectorAll("[type='checkbox']");
        const tasks = document.querySelectorAll(".todoPara");
        const number = document.querySelector(".completedTodo")
        const completed = document.querySelectorAll(".completed")
        number.textContent=checks.length-completed.length

        // loop
        for (let i = 0; i < checks.length; i++) {
            const e = checks[i];
            const z = tasks[i]
            e.addEventListener("click", ()=>{
                if(e.checked){
                    z.setAttribute("class", "todoPara completed")
                }else{
                    z.setAttribute("class", "todoPara")
                }

                const completed = document.querySelectorAll(".completed")
                number.textContent= checks.length - completed.length;
                
            })
        }
        // end of the loop

        const remove = document.querySelector(".remove")
        remove.addEventListener("click", ()=>{
            remove.parentNode.remove()
            const checks = document.querySelectorAll("[type='checkbox']");
            const completed = document.querySelectorAll(".completed")
            number.textContent=checks.length-completed.length

        })

        const clearAll = document.querySelector(".clearList")
        clearAll.addEventListener("click", ()=>{
            tasks.forEach(e=>{
                e.parentNode.remove()
                number.textContent=0
            })
        })

        const filterOption = document.querySelectorAll("[type='radio']");

        filterOption.forEach(e=>{
            e.id==="all"||e.id==="all_mob"?e.checked=true:null;

            tasks.forEach(e=>{
                e.parentNode.style.display="flex";
            })
        })  

        
        filterOption.forEach(e=>{
            e.addEventListener("change", ()=>{

                if(e.checked&&(e.id==="comp"||e.id==="comp_mob")){
                    tasks.forEach(e=>{
                        e.classList.contains("completed")===true?e.parentNode.style.display="flex":null;
                        e.classList.contains("completed")===false?e.parentNode.style.display="none":null;
                    })
                }else if(e.checked&&(e.id==="active"||e.id==="active_mob")){
                    tasks.forEach(e=>{
                        e.classList.contains("completed")===false?e.parentNode.style.display="flex":null;
                        e.classList.contains("completed")===true?e.parentNode.style.display="none":null;

                    })
                }else if(e.checked&&(e.id==="all"||e.id==="all_mob")){
                    tasks.forEach(e=>{
                        e.parentNode.style.display="flex";
                    })
                }
            })
        })


        
    }
})
const switcher = document.querySelector(".switcher")
switcher.addEventListener("click", ()=>{
    if(document.documentElement.dataset.theme==="dark"){
        document.documentElement.setAttribute('data-theme', 'light')
        switcher.querySelector('img').src="images/icon-moon.svg"
    }else{
        document.documentElement.setAttribute('data-theme', 'dark')
        switcher.querySelector('img').src="images/icon-sun.svg"
    }
})
