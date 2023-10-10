let numero = prompt('Dime un número')
        if (isNaN(numero)) {
            console.warn('NO SE HA INTRODUCIDO LO QUE SE ESPERABA')
        } else if (numero < 0) {
            console.warn('NO SE HA INTRODUCIDO UN NÚMERO POSITIVO')
            numero=prompt('Dime otro numero')
        } else {
            let cont = 0
            document.write('<ul>\n')
            for (var i=cont;i<=10;i++) {
                document.write('<li>'+numero + '*' + i + '=' + numero * i+'</li>')
            }
            document.write('</ul>')
        }