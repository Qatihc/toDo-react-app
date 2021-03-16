class Category{
  constructor(obj){
    this.name = obj.name;
    this.toDos = [];

    /* FIX TEMPORAL HASTA QUE HAYA BACKEND*/
    this.id = obj.id;
  }
}

export default Category;