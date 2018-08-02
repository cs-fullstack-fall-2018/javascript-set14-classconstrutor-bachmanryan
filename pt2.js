class ToDo{
    constructor(name, dueDate, list){
        this.name = name;
        this.dueDate = dueDate;
        this.list = list;

    }
}

function main(){
    newToDoList = new ToDo("Kenn", "Next Week", ["Do the dishes", "Wash your clothes"])
    alert(newToDoList.list)
}

main();