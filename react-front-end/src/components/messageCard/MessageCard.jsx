import React from "react";
import { useRef } from "react";
import {Toast} from 'primereact/toast'

const MessageCard = ({severity, info, details}) => {
    const toast = useRef(null);

    const show = () => {
        toast.current.show({severity: severity, summary: info, detail: details});
    }

    return (
        <Toast ref={toast}></Toast>
    )
}

export default MessageCard;