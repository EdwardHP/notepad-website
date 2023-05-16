import Notepad from '../Notepad/Notepad'
import style from './NotepadList.module.css'

function NotepadList(props) {

    return (
        <section className={style.notepadList}>
            {props.notepadData && props.notepadData.map((notepad) => {
                return <Notepad key={notepad._id} title={notepad.title} content={notepad.content} 
                setPanelOpen={props.setPanelOpen} address={notepad._id} setNotepadId={props.setNotepadId} setEditNotepad={props.setEditNotepad} setNotepadContent={props.setNotepadContent} setForceUpdate={props.setForceUpdate} />
            })}
        </section>
    )
}

export default NotepadList
