document.addEventListener("keypress", function (e) {
   console.log(e);
   if (e.code === "Numpad1") {
      const btnPsh = document.querySelector(".tecla_psh");
      btnPsh.focus();
      btnPsh.classList.add("ativa")
      btnPsh.onkeydown = function (e) {
         switch (e.code) {
            case "Space":
            case "Enter":
            case "NumpadEnter":
               btnPsh.classList.add("ativa");
         }
      };
      btnPsh.onkeyup = function (e) {
         if (e.code === "Numpad1") {
            btnPsh.click();
            btnPsh.classList.remove("ativa");
         } else {
            btnPsh.classList.remove("ativa");
         }
      };
   }

   if (e.code === "Numpad2") {
      const btnTic = document.querySelector(".tecla_tic");
      btnTic.focus();
      btnTic.classList.add("ativa")
      btnTic.onkeydown = function (e) {
         switch (e.code) {
            case "Space":
            case "Enter":
            case "NumpadEnter":
               btnTic.classList.add("ativa");
         }
      };
      btnTic.onkeyup = function (e) {
         if (e.code === "Numpad2") {
            btnTic.click();
            btnTic.classList.remove("ativa");
         } else {
            btnTic.classList.remove("ativa");
         }
      };
   }

   if (e.code === "Numpad3") {
      const btnTom = document.querySelector(".tecla_tom");
      btnTom.focus();
      btnTom.classList.add("ativa")
      btnTom.onkeydown = function (e) {
         switch (e.code) {
            case "Space":
            case "Enter":
            case "NumpadEnter":
               btnTom.classList.add("ativa");
         }
      };
      btnTom.onkeyup = function (e) {
         if (e.code === "Numpad3") {
            btnTom.click();
            btnTom.classList.remove("ativa");
         } else {
            btnTom.classList.remove("ativa");
         }
      };
   }

   if (e.code === "Numpad4") {
      const btnPuff = document.querySelector(".tecla_puff");
      btnPuff.focus();
      btnPuff.classList.add("ativa")
      btnPuff.onkeydown = function (e) {
         switch (e.code) {
            case "Space":
            case "Enter":
            case "NumpadEnter":
               btnPuff.classList.add("ativa");
         }
      };
      btnPuff.onkeyup = function (e) {
         if (e.code === "Numpad4") {
            btnPuff.click();
            btnPuff.classList.remove("ativa");
         } else {
            btnPuff.classList.remove("ativa");
         }
      };
   }

   if (e.code === "Numpad5") {
      const btnSplash = document.querySelector(".tecla_splash");
      btnSplash.focus();
      btnSplash.classList.add("ativa")
      btnSplash.onkeydown = function (e) {
         switch (e.code) {
            case "Space":
            case "Enter":
            case "NumpadEnter":
               btnSplash.classList.add("ativa");
         }
      };
      btnSplash.onkeyup = function (e) {
         if (e.code === "Numpad5") {
            btnSplash.click();
            btnSplash.classList.remove("ativa");
         } else {
            btnSplash.classList.remove("ativa");
         }
      };
   }

   if (e.code === "Numpad6") {
      const btnToim = document.querySelector(".tecla_toim");
      btnToim.focus();
      btnToim.classList.add("ativa")
      btnToim.onkeydown = function (e) {
         switch (e.code) {
            case "Space":
            case "Enter":
            case "NumpadEnter":
               btnToim.classList.add("ativa");
         }
      };
      btnToim.onkeyup = function (e) {
         if (e.code === "Numpad6") {
            btnToim.click();
            btnToim.classList.remove("ativa");
         } else {
            btnToim.classList.remove("ativa");
         }
      };
   }

   if (e.code === "Numpad7") {
      const btnPom = document.querySelector(".tecla_pom");
      btnPom.focus();
      btnPom.classList.add("ativa")
      btnPom.onkeydown = function (e) {
         switch (e.code) {
            case "Space":
            case "Enter":
            case "NumpadEnter":
               btnPom.classList.add("ativa");
         }
      };
      btnPom.onkeyup = function (e) {
         if (e.code === "Numpad7") {
            btnPom.click();
            btnPom.classList.remove("ativa");
         } else {
            btnPom.classList.remove("ativa");
         }
      };
   }

   if (e.code === "Numpad8") {
      const btnClap = document.querySelector(".tecla_clap");
      btnClap.focus();
      btnClap.classList.add("ativa")
      btnClap.onkeydown = function (e) {
         switch (e.code) {
            case "Space":
            case "Enter":
            case "NumpadEnter":
               btnClap.classList.add("ativa");
         }
      };
      btnClap.onkeyup = function (e) {
         if (e.code === "Numpad8") {
            btnClap.click();
            btnClap.classList.remove("ativa");
         } else {
            btnClap.classList.remove("ativa");
         }
      };
   }

   if (e.code === "Numpad9") {
      const btnTim = document.querySelector(".tecla_tim");
      btnTim.focus();
      btnTim.classList.add("ativa")
      btnTim.onkeydown = function (e) {
         switch (e.code) {
            case "Space":
            case "Enter":
            case "NumpadEnter":
               btnTim.classList.add("ativa");
         }
      };
      btnTim.onkeyup = function (e) {
         if (e.code === "Numpad9") {
            btnTim.click();
            btnTim.classList.remove("ativa");
         } else {
            btnTim.classList.remove("ativa");
         }
      };
   }
});
