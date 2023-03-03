

        //Dados do usuario 

		function enviarFormulario() {

			var nome = document.getElementById("nome").value;
			var email = document.getElementById("email").value;
			var mensagem = document.getElementById("mensagem").value;
      var idade = document.getElementById("idade").value;

      if (nome !== "" && email !== "" && mensagem !== "" && idade !== "") // verifica os valores se forem > 0 envia . 
			alert("Informações enviadas com sucesso!");

      if (nome === "" || email === "" || mensagem === "" || idade === ""){  // verifica se os valores são 0 ou vazios, ele interrompe.
        alert("Preencha os campos faltantes.")
      }

      
		}
        
        // função para validar os dados


        function validarFormulario() {

            var form = document.forms["validar-formulario"];

            // obtém todos os elementos "input" do formulário

            var inputs = form.getElementsByTagName("input");  // verifica se algum campo está vazio
            for (var i = 0; i < inputs.length; i++) {
                if (inputs[i].value == "") {                   // interrompe o envio do formulário
                return false; 
              }
            }
          
            return true; // permite o envio do formulário se todos os campos estiverem preenchidos
          };
          