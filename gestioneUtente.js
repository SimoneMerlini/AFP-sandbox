/*
Restituisce l'oggeto User caricato tramite ID.
@param id Identificativo dell'utente.
@return Promise<Object> Promise contentente l'oggetto User.
*/

function userProfileById(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: 'Mario',
                    surname: 'Rossi'
                });
            } else {
                reject(new Error('ID non valido!'));
            }
        }, 3000);
    });
}

function checkIdExistence(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve(userId);
            } else {
                reject(new Error('ID non valido!') );
            }
        }, 2000);

        //userId > 0 ? resolve(true) : reject(false);
    });
}

async function showUserData(id) {
    console.log("Caricamento in corso...");
    try {
        const userId = await checkIdExistence(id);
        const userData = await userProfileById(userId);
        console.log("Utente trovato: ", userData);
    } catch (error) {
        console.error("Impossibile caricare l'utente: ", error.message);
    } finally {
        console.log("Operazione completata.\n\n");
    }
}

showUserData(1); //Resolve
showUserData(-1); //Reject
console.log("\n");