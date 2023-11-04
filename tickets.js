let resumen;

function total()
{
    let precio=200;
    let cantidad=document.getElementById('Cantidad').value;
    let discount=document.getElementById('select').value;

    if (cantidad<0){cantidad=cantidad*(-1);}

    resumen = (precio-((precio * discount) / 100))*cantidad;

    document.getElementById('total').innerHTML=(resumen);

    if (resumen==0){document.getElementById('total').innerHTML=('');}
 
}



function restore()
{
    let test=document.getElementById('total').innerHTML=('');
}

function update()
{

    let noti=prompt('esta seguro? total a pagar  \n $' + resumen +  '\n s/n' );

    if (noti=='s' || noti=='S')
    {
        return true;
    }else
    {
        return false;
    }

}