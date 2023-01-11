import React, { useContext, useState } from 'react'
import { taskListContext } from '../App'


function NewTask() {
    let taskList = useContext(taskListContext)
    const [newItem, setNewItem] = useState({ id: '', item: '', status: false })

    const getNewItemValue = (event) => {
        let value = event.target.value;
        let id;
        let tasklist = taskList.taskList
        if (tasklist.length == 0) {
            id = 0;
        }
        else {
            id = tasklist[tasklist.length - 1].id + 1;
        }
        setNewItem({
            id: id,
            item: value,
            status: false
        });
    }
    const createNewItem = () => {
        if (newItem.item == '') {
            window.alert("Vui lòng nhập thông tin trước khi thêm vào");
            return;
        }
        taskList.createNewItem(newItem)
        setNewItem({ item: '', status: false })
    }

    const keyUpConfirm = (key) => {
        if (key.key != "Enter") {
            return;
        }
        createNewItem()
    }


    return (
        <>
            <input type="text" id="myInput" onKeyUp={keyUpConfirm} onChange={getNewItemValue} value={newItem.item} placeholder="Title..." />
            <span
                onClick={createNewItem}
                className="addBtn">
                Add
            </span>
        </>
    )
}

export default NewTask