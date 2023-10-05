function popolaCampi() {
    let ragioneSociale = document.getElementById('nome_azienda').innerText;
    let pIva = document.getElementById('piva').innerText;
    let codiceFiscale = document.getElementById('codice_fiscale').innerText;
    let sede = document.getElementById('sede').innerText;
    let telefono = document.getElementById('telefono').innerText;
    let pec = document.getElementById('pec').innerText;
    let email = document.getElementById('email').innerText;

    document.getElementById('ragioneSociale').value = ragioneSociale;
    document.getElementById('pIva').value = pIva;
    document.getElementById('codiceFiscale').value = codiceFiscale;
    document.getElementById('sedeUno').value = sede;
    document.getElementById('telefonoUno').value = telefono;
    document.getElementById('pecUno').value = pec;
    document.getElementById('emailUno').value = email;
    
    let titoloElement = document.getElementById('titolo');
    if (titoloElement) {
        titoloElement.innerText = ragioneSociale;
    }
}

function salvaModifiche() {
    let ragioneSociale = document.getElementById('ragioneSociale').value;
    let pIva = document.getElementById('pIva').value;
    let codiceFiscale = document.getElementById('codiceFiscale').value;
    let sede = document.getElementById('sedeUno').value;
    let telefono = document.getElementById('telefonoUno').value;
    let pec = document.getElementById('pecUno').value;
    let email = document.getElementById('emailUno').value;

    document.getElementById('nome_azienda').textContent = ragioneSociale;
    document.getElementById('piva').textContent = pIva;
    document.getElementById('codice_fiscale').textContent = codiceFiscale;
    document.getElementById('sede').textContent = sede;
    document.getElementById('telefono').textContent = telefono;
    document.getElementById('pec').textContent = pec;
    document.getElementById('email').textContent = email;
    document.getElementById('titolo_azienda').textContent = ragioneSociale;
    // Per chiudere il modale
    $('#myModal').modal('hide');
}