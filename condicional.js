function media(){
    var val1 = document.getElementById('valor1').value
    var val2 = document.getElementById('valor2').value
    var result = (parseInt(val1)) + (parseInt(val2))/2;
    

    if(result==10)
    alert('genial')

    if(result==0)
    alert('iiiiih')
    
    if(result >=6) 
    alert('Sua média foi =' + result + 'Parabéns, foi aprovado(a)')
    else
    alert('Sua média foi =' + result + 'Foi reprovado(a)')
}

function comparacao(){
    var val1 = document.getElementById('valor1').value;
    var val2 = document.getElementById('valor2').value;

    if(val1==val2)
    alert('Os valores são iguais')
    else

    if(val1>val2)
    alert('Valor 1 é maior que valor 2')
    else 
    alert('Valor 2 é maior que valor 1')
    
}