import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsPropsType} from "../../../redux/store";


 type DialogItemPropsType = {
     name:string
     id:number
 }
const DialogItem = (props: DialogItemPropsType) => {
    return <div className={s.dialog}>
        <NavLink to={"/dialog/" + props.id}> {props.name}</NavLink>
    </div>
}
export default DialogItem