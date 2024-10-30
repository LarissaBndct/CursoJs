// * 5 - Escreva um programa que imprima os múltiplos de 3 e 5 simultaneamente entre 1 e 100.
for(let contador = 0; contador <100; contador++)
{
    if((contador % 3 == 0) && (contador % 5 == 0))
    {
        console.log(contador);
    }
}
