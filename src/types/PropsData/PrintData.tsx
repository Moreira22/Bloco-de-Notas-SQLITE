import { BlocoData } from "./Propsdata";

export const printBloco = (bloco : BlocoData) =>{
    console.log(`id:${bloco.id}, 
    titulo: ${bloco.titulo},
    texto: ${bloco.texto},`)
}