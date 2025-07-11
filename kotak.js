     function tambahInput(value) {
        document.getElementById("layar").value += value;
      }

      function hapus() {
        document.getElementById("layar").value = "";
      }

      function hapusSatu() {
        let current = document.getElementById("layar").value;
        document.getElementById("layar").value = current.slice(0, -1);
      }

      function hitung() {
        try {
          document.getElementById("layar").value = eval(
            document.getElementById("layar").value
          );
        } catch (e) {
          alert("Ini kalkulator, jangan sok ngide lo");
        }
      }