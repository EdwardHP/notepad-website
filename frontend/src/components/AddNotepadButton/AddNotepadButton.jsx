import { IoIosAdd } from 'react-icons/io'
import style from './AddNotepadButton.module.css'

function AddNotepadButton(props) {

    const openPanel = () => {
        props.setEditNotepad(false);
        props.setPanelOpen(true);
    };

    return (
        <button className={style.addNotepadButton} onClick={openPanel} ><IoIosAdd /></button>
    )
}

export default AddNotepadButton
