import React, { useContext } from "react";
import Item from "./Item";
import { taskListContext } from "../App";


function TaskList(props) {
    let { taskList } = useContext(taskListContext)
    let elementItem = taskList.map((item, index) => {
        return <Item key={index} stt={index} item={item}></Item>
    })
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th className="col-1">No</th>
                        <th className="col-2">Item</th>
                        <th className="col-3">Status</th>
                        <th className="col-4" colSpan={3}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {elementItem}
                </tbody>
            </table>
        </>
    )
}

export default TaskList