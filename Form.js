import React from 'react'
import { useEffect, useState } from "react";
import Modal from './Modal'

const Form = () => {
    const [currentData, setCurrentData] = useState();
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("create");
    const [data, setData] = useState([]);

    useEffect(() => {
        const getDataFromLocal = JSON.parse(localStorage.getItem("data"));
        setData(getDataFromLocal);
    }, [open]);

    return (
        <div>
            <div className="container py-4" style={{ position: "absolute", right: "3.6rem" }}      >
                <button className="btn btn-sm btn-primary" onClick={() => { setType("create"); setOpen(true); }} > Add Data </button>
            </div>            <br /><br />            <br /><br />            <br />

            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => {
                            // console.log(data);
                            return (
                                <tr key={index}>
                                    <td >{index + 1}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.hobbies.join(" , ")}</td>
                                    {/* <td>{item.hobbies}</td> */}
                                    <td>
                                        <button className="btn btn-sm btn-warning" onClick={() => { setCurrentData(item); setType("update"); setOpen(true); }}>  Update</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button className="btn btn-sm  btn-danger"
                                            onClick={() => { const newData = data.filter((itemData) => itemData.id !== item.id); localStorage.setItem("data", JSON.stringify(newData)); setData(newData); }} >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <Modal
                open={open}
                setOpen={setOpen}
                currentData={currentData}
                type={type}
            />
        </div >
    )
}

export default Form