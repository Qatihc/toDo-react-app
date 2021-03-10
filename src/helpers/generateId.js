let currentId = 2;

const generateId = function(){
  currentId++
  return currentId
}

export default generateId;
