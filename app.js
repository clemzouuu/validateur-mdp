
let mdp = document.querySelector('#mdp')
help = []
help_suppression = []
let compteur = 0
let compteur2 = 0
let compteur3 = 0


mdp.addEventListener('keydown',function Ecrire (e){
    
    // Si l'input rentré fait plus de 7 charactères, condition validée
    if (help.length >= 7){
        let cc4 = document.getElementById("Longueur")
        cc4.classList.remove('Black')
        cc4.classList.add('Green')
 
    }

    // Si l'input rentré est une majuscule, condition validée
    if(e.keyCode >= 60 && e.keyCode <= 90 && (e.shiftKey == true)){
        let cc1 = document.getElementById("Maj")
        cc1.classList.remove('Black')
        cc1.classList.add('Green') 
        help.push(e.key)
        help_suppression.push(e.keyCode)
        // A chaque lettre rentrée, le compteur augmente
        compteur ++
    }

    // Quand on efface le dernier charactère de l'input, on le supprime aussi dans une array
    if(e.keyCode == 8){
        let last_element = help_suppression.length - 1
       
        if(help_suppression[last_element]>= 60 && help_suppression[last_element] <= 90){
            compteur --

        } else if (help_suppression[last_element] >= 48 && help_suppression[last_element] <= 57){
            compteur2 --

        } else if (help_suppression[last_element] >= 186 && help_suppression[last_element] <= 223){
            compteur3 -- 
        } else if (help.length -1 < 8) {
            let cc4 = document.getElementById("Longueur")
            cc4.classList.remove('Green')
            cc4.classList.add('Black')
            console.log(help.length +1)
        }

        // Si pas de majuscule, condition non remplie
        if(compteur == 0) {
            let cc1 = document.getElementById("Maj")
            cc1.classList.remove('Green')
            cc1.classList.add('Black')
        }

        help.pop()
        help_suppression.pop()

    }

    //  +100 pour ne pas melanger la liste avec les majuscules, mesure différente
    if(e.keyCode >= 60 && e.keyCode <= 90 && (e.shiftKey == false)){

        help.push(e.key)
        help_suppression.push(e.keyCode + 100)
    }

    // Si un chiffre est entré, condition remplie
    if(e.keyCode >= 48 && e.keyCode <= 57){
        let cc2 = document.getElementById("Chiffre")
        cc2.classList.remove('Black')
        cc2.classList.add('Green')
        help.push(e.key)
        help_suppression.push(e.keyCode)
        compteur2 ++
    }
    // Si pas de chiffre, condition non remplie
    if(compteur2 == 0) {
        let cc2 = document.getElementById("Chiffre")
        cc2.classList.remove('Green')
        cc2.classList.add('Black')
    }


    // Si un caractère spéciale est entré, condition remplie
    if(e.keyCode >= 186 && e.keyCode <= 223){
        let cc3 = document.getElementById("Special")
        cc3.classList.remove('Black')
        cc3.classList.add('Green')
        help.push(e.key)
        help_suppression.push(e.keyCode)
        compteur3 ++

    }
    // Si pas de caractère spécial, condition non remplie
    if(compteur3 == 0) {
        let cc3 = document.getElementById("Special")
        cc3.classList.remove('Green')
        cc3.classList.add('Black')
    }
        
    
})

 