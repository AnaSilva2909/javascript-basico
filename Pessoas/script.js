function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno= document.getElementById('txtano');   
    var res = document.querySelector('div#res');

   if(fAno.value.length == 0 || Number( fAno.value )> ano){
    window.alert("[ERRO] Verifique os dados e tente novamente!");

   }else{
    var  fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fAno.value);
    res.innerHTML = `Idade calculada: ${idade}`;
    var genero = '';

    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
        genero = 'Homem';

        if (idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'bebemenino.png');
            document.body.style.background = '#92A200';
            
        }else if( idade <21){
            //Jovem
            img.setAttribute('src', 'jovemhomem.png');
            document.body.style.background = '#BECFDB';

        }else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'adultohomem.png');
            document.body.style.background = '#4A5F56';
            
        }else{
            //Idoso
            img.setAttribute('src', 'idosohomem.png');
            document.body.style.background = '#8F2E33';
        }
        
    }else if (fsex[1].checked){
        genero = 'Mulher';

        if (idade >= 0 && idade < 10) { 
            //Criança
            img.setAttribute('src', 'bebemenina.png');
            document.body.style.background = '#EBC09A';
            
        }else if( idade <21){
            //Jovem
            img.setAttribute('src', 'jovemmulher.png');
            document.body.style.background = '#E98A12';

        }else if(idade < 50){
            //Adulto
            img.setAttribute('src', 'adultamulher.png');
            document.body.style.background = '#3A2D24';
            
        }else{
            //Idoso
            img.setAttribute('src', 'idosamulher.png');
            document.body.style.background = '#FECD96';
        }
    }

    res.style.textAlign = 'center';

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
   }
}