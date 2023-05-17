export function createNewNotepad(newNotepad) {
    return fetch('http://localhost:3000/notepad', {
        method: 'POST',
        body: JSON.stringify(newNotepad),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .catch(error => console.log('Erro: ', error));
}

export function getAllNotepads() {
    return fetch('http://localhost:3000/notepad')
    .then(response => response.json())
    .catch(error => console.log('Erro: ', error));
}

export function findNotepadsByTitle(notepadTitle) {
    return fetch(`http://localhost:3000/notepad/title/${notepadTitle}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log('Erro: ', error));
}

export function editNotepad(id, edits) {
    return fetch(`http://localhost:3000/notepad/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(edits),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
    .catch(error => console.log('Erro: ', error));
}

export async function deleteNotepad(id) {
    await fetch(`http://localhost:3000/notepad/${id}`, {
        method: 'DELETE',
    });
}