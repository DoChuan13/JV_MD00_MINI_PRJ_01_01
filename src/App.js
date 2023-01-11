import logo from './logo.svg';
import './App.css';
import NewTask from './components/NewTask';
import TaskList from './components/TaskList';
import React, { createContext, useEffect, useState } from 'react';


export const taskListContext = createContext()

function App() {
  const [taskList, setTaskList] = useState([])

  useEffect(() => {
    let taskList = JSON.parse(localStorage.getItem('taskList'))
    if (!taskList) {
      taskList = []
      localStorage.setItem('taskList', JSON.stringify(taskList))
    }
    else {
      setTaskList(taskList);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])

  //Detail Function
  const createNewItem = (newItem) => {
    setTaskList([...taskList, newItem])
  }

  const finishItem = (modifeItem) => {
    let newmodifeItem = {
      id: modifeItem.id,
      item: modifeItem.item,
      status: modifeItem.status ? false : true,
    }
    let newItemArr = taskList.map((item) => {
      if (item.id == modifeItem.id) {
        return newmodifeItem;
      }
      else {
        return item;
      }
    })
    setTaskList(newItemArr)
  }

  const deleteItem = (modifeItem) => {
    let newItemArr = taskList.filter((item) => {
      if (item.id != modifeItem.id) {
        return item;
      }
    })
    setTaskList(newItemArr)
  }

  const editItem = (modifeItem) => {
    let newItemArr = taskList.map((item) => {
      if (item.id == modifeItem.id) {
        return modifeItem;
      }
      else {
        return item;
      }
    })
    setTaskList(newItemArr)
  }

  return (
    <taskListContext.Provider value={{ taskList: taskList, createNewItem: createNewItem, finishItem: finishItem, deleteItem: deleteItem, editItem: editItem }}>
      <div className="App">
        <>
          <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <NewTask></NewTask>
          </div>
          <TaskList></TaskList>
        </>
      </div>
    </taskListContext.Provider>
  );
}

export default App;
