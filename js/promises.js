const controlloNumerico = new Promise((resolve, reject) => {
    const numero  = Math.floor(Math.random() * 10); // Genera un numero casuale tra 0 e 9
    console.log(`Genera un numero maggiore o uguale a 5 per vincere.`);

    if (numero >= 5) {
        resolve(`[OK] Il numero generato è ${numero}, hai vinto!`);
    } else {
        reject(new Error(`[KO] Il numero generato è ${numero}, hai perso!`));
    }
});

/*
.then
.catch
.finally
*/
/*
controlloNumerico
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error.message);
    })
    .finally(() => {
        console.log("Grazie per aver partecipato al gioco!");
    });
*/

async function eseguiControllo() {
    try {
        const result = await controlloNumerico;
        console.log(result);
    } catch (error) {
        console.error(error.message);
    } finally { 
        console.log("Grazie per aver partecipato al gioco!");
    }
}

eseguiControllo();