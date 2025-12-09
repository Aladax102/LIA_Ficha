    // Define a senha de cada ficha
    const senhas = {
        ficha1: "Carrasco",
        ficha2: "Risperidona",
        ficha3: "0000",
    };

    // Define o destino de cada ficha
    const paginas = {
        ficha1: href="Player1/Osino1.html",
        ficha2: "ficha_personagem_2.html",
        ficha3: "ficha_personagem_3.html",
    };

    let fichaSelecionada = null;

    function pedirSenha(ficha) {
        fichaSelecionada = ficha;
        document.getElementById("senhaInput").value = "";
        document.getElementById("erro").style.display = "none";
        document.getElementById("senhaPopup").style.display = "flex";
    }

    function fecharPopup() {
        document.getElementById("senhaPopup").style.display = "none";
    }

    function confirmarSenha() {
        const senhaDigitada = document.getElementById("senhaInput").value;

        if (senhaDigitada === senhas[fichaSelecionada]) {
            window.location.href = paginas[fichaSelecionada];
        } else {
            document.getElementById("erro").style.display = "block";
        }
    }