import ToDo from '../models/ToDo'

const testCategory = {
  name: 'categoria de prueba',
  id: 1,
  toDos: [
    new ToDo({name: 'primero', id: 1}),
    new ToDo({name: 'seg', id: 2}),
    new ToDo({name: 'quin', id: 3}),
  ]
}

const pepCategory = {
  name: 'segundo test',
  id: 2,
  toDos: [
    new ToDo({name: 'terc', id: 6}),
    new ToDo({name: 'cu', id: 7}),
  ]
}

const tercera = {
  name: 'tercera cat',
  id: 3,
  toDos: []
}

export {testCategory, pepCategory, tercera}