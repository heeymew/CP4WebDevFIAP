import gatinhoslog from "./gatinhoslog/consolelog.js";

gatinhoslog(`Oi gente, eu sou ${fakename()}`);

export default function fakename() {
    const first = ['Ana','Bia','João','Julio', 'Lucas', 'Rafaela', 'Pietro', 'Leandro', 'Jéssica']
    const last = ['Alface','Melão','Goiaba','Cenoura', 'Maçã', 'Tangerina', 'Uva', 'Laranja']
    let firstName = first[parseInt(Math.random()*4)]
    let lastName = last[parseInt(Math.random()*4)]
    return `${firstName} ${lastName}`;
    }