import style from './NotepadPanel.module.css'
import { createNewNotepad, editNotepad } from '../../API/queryAPI'
import { useRef } from 'react'

function NotepadPanel(props) {

    const title = useRef(null);
    const content = useRef(null);

    // Verifica se é para criar ou modificar um bloco de notas
    const Controller = async () => {
        if (props.editNotepad)
            await edit();
        else
            await createNotepad();

        // Atualiza os blocos de notas
        props.setForceUpdate(prev => !prev);
        // Fecha o panel
        props.setPanelOpen(false);
    };
    // Cria um bloco de notas
    const createNotepad = async () => {
        await createNewNotepad({ title: title.current.value, content: content.current.value });
    };
    // Edita um bloco de notas
    const edit = async () => {
        // Edita o bloco de notas
        await editNotepad(props.notepadId, { title: title.current.value, content: content.current.value });
    };
    // Loga nas informações do bloco de notas
    const loadInfo = (index) => {
        if (props.editNotepad)
            return props.notepadContent[index];
        else
            return '';
    };

    return (
        <section id={style.notepadPanel} >
            <section id={style.panel}>
                <textarea id={style.title} placeholder='Title' ref={title} defaultValue={loadInfo(0)} ></textarea>
                <textarea id={style.content} placeholder='Content' ref={content} defaultValue={loadInfo(1)} ></textarea>
                <button onClick={Controller} >Fechar</button>
            </section>
        </section>
    )
}

export default NotepadPanel
