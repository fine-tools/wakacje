const daty = {
    koniecSzkoly: new Date("June 25, 2027 08:00:00").getTime(),
    egzaminyPolski: new Date("May 11, 2027 09:00:00").getTime(),
    egzaminyMatematyka: new Date("May 12, 2027 09:00:00").getTime(),
    egzaminyAngielski: new Date("May 13, 2027 09:00:00").getTime()
};

function sledzCzas() {
    const dni0 = document.getElementById("dni");
    const dni1 = document.getElementById("epdni");
    const dni2 = document.getElementById('emdni');
    const dni3 = document.getElementById('eadni');
    const teraz = new Date().getTime();

    /* WAKACJE */
    if (dni0) {
        const roznica0 = daty.koniecSzkoly - teraz;

        if (roznica0 <= 0) {
            document.getElementById("page-middle").innerText = "Mamy wakacje!";
            return;
        }

        const dni = Math.floor(roznica0 / (1000 * 60 * 60 * 24));
        const godziny = Math.floor((roznica0 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minuty = Math.floor((roznica0 % (1000 * 60 * 60)) / (1000 * 60));
        const sekundy = Math.floor((roznica0 % (1000 * 60)) / 1000);
        const milisekundy = roznica0 % 1000;

        dni0.innerText = dni;
        document.getElementById("godziny").innerText = godziny;
        document.getElementById("minuty").innerText = minuty;
        document.getElementById("sekundy").innerText = sekundy;
        document.getElementById("milisekundy").innerText = milisekundy;
    }

    /* E8 */
    if (dni1) {
        const roznica1 = Math.max(0, daty.egzaminyPolski - teraz);

        const epdni = Math.floor(roznica1 / (1000 * 60 * 60 * 24));
        const epgodziny = Math.floor((roznica1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const epminuty = Math.floor((roznica1 % (1000 * 60 * 60)) / (1000 * 60));
        const epsekundy = Math.floor((roznica1 % (1000 * 60)) / 1000);
        const epmilisekundy = roznica1 % 1000;

        dni1.innerText = epdni;
        document.getElementById("epgodziny").innerText = epgodziny;
        document.getElementById("epminuty").innerText = epminuty;
        document.getElementById("epsekundy").innerText = epsekundy;
        document.getElementById("epmilisekundy").innerText = epmilisekundy;
    }
    if (dni2) {
        const roznica2 = Math.max(0, daty.egzaminyMatematyka - teraz);

        const emdni = Math.floor(roznica2 / (1000 * 60 * 60 * 24));
        const emgodziny = Math.floor((roznica2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const emminuty = Math.floor((roznica2 % (1000 * 60 * 60)) / (1000 * 60));
        const emsekundy = Math.floor((roznica2 % (1000 * 60)) / 1000);
        const emmilisekundy = roznica2 % 1000;

        dni2.innerText = emdni;
        document.getElementById("emgodziny").innerText = emgodziny;
        document.getElementById("emminuty").innerText = emminuty;
        document.getElementById("emsekundy").innerText = emsekundy;
        document.getElementById("emmilisekundy").innerText = emmilisekundy;
    }
    if (dni3) {
        const roznica3 = Math.max(0, daty.egzaminyAngielski - teraz);

        if (roznica3 <= 0) {
            document.getElementById("page-middle").innerText = "Egzaminy będą 11 maja 2028!";
            return;
        }

        const eadni = Math.floor(roznica3 / (1000 * 60 * 60 * 24));
        const eagodziny = Math.floor((roznica3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const eaminuty = Math.floor((roznica3 % (1000 * 60 * 60)) / (1000 * 60));
        const easekundy = Math.floor((roznica3 % (1000 * 60)) / 1000);
        const eamilisekundy = roznica3 % 1000;

        dni3.innerText = eadni;
        document.getElementById("eagodziny").innerText = eagodziny;
        document.getElementById("eaminuty").innerText = eaminuty;
        document.getElementById("easekundy").innerText = easekundy;
        document.getElementById("eamilisekundy").innerText = eamilisekundy;
    }
}

sledzCzas();
setInterval(sledzCzas, 1);
