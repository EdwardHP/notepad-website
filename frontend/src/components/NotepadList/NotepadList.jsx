import Notepad from '../Notepad/Notepad'

function NotepadList(props) {

    return (
        <section>
            {props.notepadData && props.notepadData.map((notepad) => {
                return <Notepad key={notepad._id} title={notepad.title} content={notepad.content} 
                setPanelOpen={props.setPanelOpen} address={notepad._id} setNotepadId={props.setNotepadId} setEditNotepad={props.setEditNotepad} setNotepadContent={props.setNotepadContent}/>
            })}
        </section>
    )
}

export default NotepadList
