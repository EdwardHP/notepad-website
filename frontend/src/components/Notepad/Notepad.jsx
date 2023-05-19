import { deleteNotepad } from '../../API/queryAPI'
import { MdDelete } from 'react-icons/md'
import { AiOutlineArrowRight } from 'react-icons/ai'
import style from './Notepad.module.css'
import { useContext } from 'react'
import { homeContext } from '../../Pages/Home/Home'

function Notepad(props) {

    const context = useContext(homeContext);

    const openPanel = () => {
        // Manda os conteúdos para o panel
        context.setNotepadContent([props.title, props.content])
        // Envia o id para o painel
        context.setNotepadId(props.address);
        // Diz que é uma edição para o painel
        context.setEditNotepad(true);
        // Abre o painel
        context.setPanelOpen(true);
    };

    const removeNotepad = async () => {
        await deleteNotepad(props.address);
        context.setForceUpdate(prev => !prev);
    };

    return (
        <section className={style.notepad} >
            <section className={style.content} onClick={openPanel} >
                <h2>{props.title}</h2>
                <p>{props.content}</p>
            </section>
            <section className={style.buttons}>
                <MdDelete onClick={removeNotepad} />
                <AiOutlineArrowRight />
            </section>
        </section>
    )
}

export default Notepad
