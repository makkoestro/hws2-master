import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";
import avatar from "../avatar.png";
import bgText from '../Rectangle 3.png'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    message: MessageType

}

export const bgImg = (img:string) => {
    return {
        backgroundImage: `url(${img}`,
        minHeight:'100%',
        width:'100%',
        maxWidth: '527px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition:'center'
    }
}
export const bgImage = {
    backgroundImage: `url(${bgText}`,
    minHeight:'100%',
    width:'100%',
    maxWidth: '527px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'center'
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div  className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={props.message.user.avatar}

                    // создаёт студент

                    //
                />
                <div style={bgImg(bgText)} className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {/*создаёт студент*/}
                        {props.message.user.name}

                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {/*создаёт студент*/}
                        {props.message.message.text}
                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {/*создаёт студент*/}
                {props.message.message.time}
                {/**/}
            </div>
        </div>
    )
}

export default Message
