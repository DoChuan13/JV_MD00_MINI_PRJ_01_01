import React, { useContext, useState, useEffect, useRef } from "react";
import { taskListContext } from "../App";
import { ReactDOM } from "react";

function Item(props) {
    const [detailItem, setDetailItem] = useState('')
    const [editStatus, setEditStatus] = useState(false)
    const ref = useRef('')
    let taskListContextList = useContext(taskListContext)

    let { item } = props;
    useEffect(() => {
        setDetailItem(item);
    }, [])

    useEffect(() => {
        setDetailItem(item);
    }, [item])

    const setFinishTask = (item) => {
        taskListContextList.finishItem(item)
    }

    const setDeleteTask = (item) => {
        let checkConfirm = window.confirm("Bạn có chắc chắn muốn xóa Item này không?")
        if (!checkConfirm) {
            return;
        }
        taskListContextList.deleteItem(item)
    }

    const setEditTask = () => {
        setEditStatus(true)
    }

    const getchangeValue = (event) => {
        let value = event.target.value;
        setDetailItem({
            id: detailItem.id,
            item: value,
            status: detailItem.status
        })
    }

    const saveTask = () => {
        if (detailItem.item == '') {
            window.alert("Vui lòng không để trường thông tin trống");
            return;
        }
        taskListContextList.editItem(detailItem)
        setEditStatus(false)
    }

    const keyUpConfirm = (key) => {
        if (key.key != "Enter") {
            return;
        }
        saveTask()
    }

    let elementEditBtn, elementItemContent;
    if (editStatus) {
        elementEditBtn = <><button className="main-btn color-4" onClick={() => { saveTask() }}>Save</button></>
        elementItemContent = <><input value={detailItem.item} onKeyUp={keyUpConfirm} onChange={getchangeValue}></input></>

    }
    else {
        elementEditBtn = <><button className="main-btn color-2" onClick={() => { setEditTask() }}>Edit</button></>
        elementItemContent = <>{detailItem.item}</>
    }

    let statusClass = detailItem.status ? 'done' : 'pending';
    let elementFinishBtn
    if (detailItem.status) {
        elementFinishBtn = <><button className="main-btn color-5" onClick={() => { setFinishTask(item) }}>Pending</button></>
    }
    else {
        elementFinishBtn = <><button className="main-btn color-1" onClick={() => { setFinishTask(item) }}>Finish</button></>
    }

    return (
        <>
            <tr className={statusClass}>
                <td>{props.stt + 1}</td>
                <td>{elementItemContent}</td>
                <td>{detailItem.status ? 'Done' : 'Pending'}</td>
                <td>{elementFinishBtn}</td>
                <td><button className="main-btn color-3" onClick={() => { setDeleteTask(item) }}>Delete</button></td>
                <td>{elementEditBtn}</td>
            </tr>
        </>
    )
}

export default Item