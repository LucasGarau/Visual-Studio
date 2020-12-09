export class tv {
    current = 0;
    channels = ["alldayfilms", "kidstv", "natureplus", "sportstv", "technologytoday", "xtremsports"];
    interval;

    /* Exercici a */
    play() {
        document.querySelector("#program").play();
        countdown();
    };

    stop() {
        document.querySelector("#program").pause();
    };

    /* Exercici b */



    seguent() {
        document.querySelector("#program-source").src = `videos/${channels[Math.abs(++this.current % channels.length)]}.webm`;
        document.querySelector("#program").load();
    }

    anterior() {
        document.querySelector("#program-source").src = `videos/${channels[Math.abs(--this.current % channels.length)]}.webm`;
        document.querySelector("#program").load();
    }
    /* Exercici c */

    countdown() {
        let temps = parseInt(document.querySelector("#timer").innerHTML);
        clearInterval(this.interval);
        this.interval = setInterval(function () {
            temps--;

            document.querySelector("#timer").innerHTML = temps;

            if (temps === 0) {
                document.querySelector("#timer").innerHTML = 5;
                stop();
                clearInterval(this.interval);
            }
        }, 1000)
    }

    /* Exercici d */
    loadProgramacio(canal) {

        const peticions = [];
        for (let i = 0; i < 24; i++) {
            const peticio = fetch("http://server247.cfgs.esliceu.net/exercicis/programacio/tv", {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: `can=${canal}&hour=${i}`
                //ESTO SE PUEDE CAMBIAR POR JSON PARA QUE TE SAQUE UN JSON
            }).then(x => x.text());

            peticions.push(peticio);

        }
        Promise.all(peticions).then(resposta => {
            document.querySelector("table").innerHTML = "";

            resposta.forEach(resp => {
                const r = JSON.parse(resp);
                let fila = "<tr>"
                fila += `<td>${r.program}</td>`
                fila += `<td>${r.hour}:00 -${r.hour + 1}:00 </td>`
                fila += `<td>+7anys</td>`
                fila += '</tr>'
                document.querySelector("table").innerHTML += fila;

            });
        }

        )
    }
}