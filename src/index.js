document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function deleteTask() {
    document.getElementById("tasks").delete();

  } 

  function newTask(){
    let li = document.createElement('li');
    li.innerText =  document.getElementById("new-task-description").value;
    document.getElementById("tasks").appendChild(li);
    if (Option.value === "high"){
      document.querySelectorAll("li").color = "red";
    }
    else if (Option.value === "medium"){
      document.querySelectorAll("li").color = "yellow";
    }
    else if (Option.value === "low"){
      document.querySelectorAll("li").color = "green";
    }

    let del = document.createElement('BUTTON')
    document.getElementById("tasks").appendChild(del);
    function delTask() {
      document.querySelector("li").delete()
    }

  }


});
