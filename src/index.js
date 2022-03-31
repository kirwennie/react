import React from 'react';
import ReactDom from 'react-dom';

import TodoList from './components/to-do';
import AppHeader from './components/header';
import Search from './components/search';
import ItemsFilter from './components/items-filter';
import ItemAddForm from './components/item-add';


class App extends React.Component {

  maxId = 100;

  state = {
    todoData : [
      this.createToDo('MEET'), 
      this.createToDo('FEED'), 
      this.createToDo('CLEAN'), 
      this.createToDo('REPEAT'), 
    ]
  };

  toggleImportant = (id) => {
    this.setState(({todoData}) => {
      const indx = todoData.findIndex((el) => el.id === id);
      const oldItem = todoData[indx];
      const newItem = {...oldItem, important: !oldItem.important};
      const before = todoData.slice(0,indx);
      const after = todoData.slice(indx+1);
      const newArr = [...before, newItem, ...after];
      return {
        todoData: newArr
      }
    })
}

toggleDone = (id) => {
  this.setState(({todoData}) => {
    const indx = todoData.findIndex((el) => el.id === id);
    const oldItem = todoData[indx];
    const newItem = {...oldItem, done: !oldItem.done};
    const before = todoData.slice(0,indx);
    const after = todoData.slice(indx+1);
    const newArr = [...before, newItem, ...after];
    return {
      todoData: newArr
    }
  })
}

createToDo(label) {
  return{
    label, 
    important: false,
    id: this.maxId++, 
    done: false
  }
}

deleted = (id) => {
  this.setState(({todoData})=>{
    const indx = todoData.findIndex((el) => el.id ===id);
    const before = todoData.slice(0, indx);
    const after = todoData.slice(indx+1);
    const newArr = [...before, ...after];
    return {
      todoData: newArr
    };
  });
}

addItem = (text) => {
  const newItem = this.createToDo(text)

  this.setState(({todoData})=>{
    const newArr = [
      ...todoData, newItem
    ];
    return {
      todoData: newArr
    };
  });
};

render(){
  const dCount = this.state.todoData.filter((el) => el.done).length;

  const tdCount = this.state.todoData.length- dCount;


  return (
    <div className='container' style={{maxWidth:800}}>

      <AppHeader toDo={tdCount} done={dCount}/>

      
      <TodoList 
      todos ={this.state.todoData} 
      onDelet={this.deleted}
      toggleDone = {this.toggleDone}
      toggleImportant = {this.toggleImportant}/>
      
      
     


      <div className='row pt-2 pb-2'>
        <div className='col-10'>
            <Search/>
        </div>
        <ItemAddForm onAddItem={this.addItem}/> 
      </div>
      
    </div>
  );
}
  
}




ReactDom.render( <App/>, document.getElementById("root"));