import { createContext, useEffect, useState } from "react"
import { getAllNotepads } from "../../API/queryAPI"
import NotepadList from "../../components/NotepadList/NotepadList"
import NotepadPanel from "../../components/NotepadPanel/NotepadPanel"
import AddNotepadButton from "../../components/AddNotepadButton/AddNotepadButton";

export const homeContext = createContext(null);

function Home() {

    // Responsável por receber informações do backend e atualizar
    const [forceUpdate, setForceUpdate] = useState(false);
    const [notepadData, setNotepadData] = useState(null);
    const load = async () => {
        setNotepadData(await getAllNotepads());
    };

    // Responsável por abrir ou fechar o panel
    const [panelOpen, setPanelOpen] = useState(false);
    // Variável que carrega o ultimo id do bloco de notas que foi editado
    const [notepadId, setNotepadId] = useState(null);
    // Variável que diferencia se é para criar um editar um bloco de notas
    const [editNotepad, setEditNotepad] = useState(false);
    // Variável que salva os conteúdos do bloco de notas
    const [notepadContent, setNotepadContent] = useState(null);

    // Pega informações do banco de dados
    useEffect(() => {
        load();
    }, [forceUpdate]);

    return (
        <homeContext.Provider value={{ notepadData, setPanelOpen, setNotepadId, setEditNotepad, setNotepadContent, setForceUpdate}}>
            <NotepadList notepadData={notepadData} />

            {panelOpen && <NotepadPanel notepadData={notepadData} setPanelOpen={setPanelOpen} notepadId={notepadId} setForceUpdate={setForceUpdate} editNotepad={editNotepad} notepadContent={notepadContent} />}

            <AddNotepadButton setEditNotepad={setEditNotepad} setPanelOpen={setPanelOpen} />
        </homeContext.Provider>
    )
}

export default Home
