function tocaSom(seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

   if (elemento !== null && elemento.localName === "audio") {
      elemento.play();
   } else if (elemento === null) {
      console.log(`O elemento ${seletorAudio} não existe.`);
   } else {
      console.log(`O elemento ${seletorAudio} não tem como tocar o som.`);
   }
}

const listaDeTeclas = document.querySelectorAll(".tecla");

for (let i = 0; i < listaDeTeclas.length; i++) {
   const tecla = listaDeTeclas[i];

   const instrumento = tecla.classList[1];

   const idAudio = `#som_${instrumento}`;

   tecla.onclick = function () {
      tocaSom(idAudio);
   };

   tecla.onkeydown = function (event) {
      if (
         event.code === "Space" ||
         event.code === "Enter" ||
         event.code === "NumpadEnter"
      ) {
         tecla.classList.add("ativa");
      }
   };

   tecla.onkeyup = function () {
      tecla.classList.remove("ativa");
   };
}
