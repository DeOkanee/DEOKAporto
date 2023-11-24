
      const swals = Swal.mixin({
        cancelButtonColor: "#0004ff",
        confirmButtonColor: "#0004ff",
        allowOutsideClick: false,
      });

      let isUsernameSubmitted = false; // Flag untuk melacak status masukan nama pengguna

      async function start() {
        if (isUsernameSubmitted) {
          // Jika nama pengguna sudah dimasukkan sebelumnya, langsung lanjutkan ke langkah berikutnya
          setTimeout(mulai, 900);
          return;
        }

        const { value: username, dismiss: dismissReason } = await Swal.fire({
          title: "Username?",
          input: "text",
          showCancelButton: true,
          cancelButtonText: "Cancel",
          confirmButtonText: "Submit",
          inputValidator: (value) => {
            if (!value) {
              return "Tolong masukkan Username!:)";
            }
          },
        });

        if (dismissReason === Swal.DismissReason.cancel) {
          Swal.fire({
            icon: "info",
            title: "Input dibatalkan",
            text: "Tolong masukkan Username!",
          }).then(start);
          return;
        }

        if (username) {
          document.getElementById("greeting").innerText =
            "Halo " + username + ", saya";
          isUsernameSubmitted = true; // Mengatur flag isUsernameSubmitted menjadi true
          setTimeout(mulai, 900);
        }
      }

      function play() {
        // Tambahkan logika pemutaran di sini
      }

      function showDiv() {
        document.getElementById("fotogoy").style.animation =
          "fotogoy 2s ease infinite";
        document.getElementById("Content").style.opacity = "5";
      }

      function mulai() {
        ketiknm();
        showDiv();
        play();
      }

      function ketiknm() {
        document.getElementById("pergeseran").style.opacity = "1";
        document.getElementById("pergeseran").style.visibility = "visible";
        document.getElementById("pergeseran").style.margin = "10px 0";
      }

      start();
