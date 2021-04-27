function consultaCep() {
    let cep = document.getElementById("cep").value;
    let url = "https://viacep.com.br/ws/" + cep + "/json/"
    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            console.log(response);
            /*document.getElementById("logradouro").innerHTML = response.logradouro;
              document.getElementById("bairro").innerHTML = response.bairro;
              document.getElementById("localidade").innerHTML = response.localidade;
              document.getElementById("uf").innerHTML = response.uf;*/
            $(".barra-progresso").show();
            $("#logradouro").html(response.logradouro);
            $("#bairro").html(response.bairro);
            $("#localidade").html(response.localidade);
            $("#uf").html(response.uf);
            $("#titulo_cep").html("CEP " + response.cep);
            $(".cep").show();
            $(".barra-progresso").hide();
        }
    })
}

$(function() {
    $(".cep").hide();
    $(".barra-progresso").hide();
})