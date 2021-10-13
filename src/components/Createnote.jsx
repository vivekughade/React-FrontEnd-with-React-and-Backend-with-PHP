import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Note from "./Note";
import { borderRadius } from "@mui/system";

const Createnote = () => {
    const [inputval, upinputVal] = useState({
        title: "",
        notetxt: ""
    });

    const inputEvent = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        upinputVal((oldval) => {
            return { ...oldval, [name]: value }
        })
    }

    const [data, upData] = useState([]);
    const addData = () => {
        upData((old) => {
            return [...old, inputval];
        })
        upinputVal({
            title: "",
            notetxt: ""
        })
    }


    const delItem = (id) => {
        upData((old) => {
            return old.filter((val, index) => {
                return index !== id;
            })
        })
    }

    const [line, upLine] = useState("none");
    const showw = () => {
        upLine("block");
    }


    return (<>
        <div className="cnote">

            <input
                type="text"
                placeholder="Write Text...."
                onChange={inputEvent}
                value={inputval.title}
                name="title"
                onClick={showw}
                autoComplete="off"
            />

            <textarea
                placeholder="Dec......."
                onChange={inputEvent}
                value={inputval.notetxt}
                name="notetxt"
                className={line}
            />

            <Button
                onClick={addData}
                color="error"
                style={{
                    background: "#448154",
                    color: "white",
                    padding: "10px",
                    borderRadius:"10%",
                    position: "absolute",
                    right: "31%",
                    top: "130px",
                    display: "block",
                }}
            >
                <AddIcon size="large" />
            </Button>
        </div>
        {
            data.map((val, index) => {
                return (<>
                    <Note
                        key={index}
                        title={val.title}
                        note={val.notetxt}
                        onClick={() => { delItem(index) }}
                    />
                </>)
            })

        }










    </>)
}

export default Createnote;