class ToDo{
  constructor(obj){
    this.name = obj.name;
    this.id = obj.id;
    this.done = false;
  }

  toggleDone(){
    this.done = !this.done;
  }
}

export default ToDo;