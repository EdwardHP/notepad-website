import React from 'react'
import { MdDelete } from 'react-icons/md'
import { AiOutlineArrowRight } from 'react-icons/ai'
import style from './Notepad.module.css'

function Notepad(props) {

    const openPanel = () => {
        // Manda os conteúdos para o panel
        props.setNotepadContent([props.title, props.content])
        // Envia o id para o painel
        props.setNotepadId(props.address);
        // Diz que é uma edição para o painel
        props.setEditNotepad(true);
        // Abre o painel
        props.setPanelOpen(true);
    };

    return (
        <section className={style.notepad} >
            <section className={style.content} onClick={openPanel} >
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </section>
            <section className={style.buttons}>
                <MdDelete />
                <AiOutlineArrowRight />
            </section>
        </section>
    )
}

export default Notepad
