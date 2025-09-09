class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    let lista = [];

    var value = new String(ordemAnimais);

    var result =  value.split(",");

    var finalResult = result.length;

   //console.log("String animais --> " + value);

    //console.log("Split animais --> " + result);

    //console.log("get Length animais --> " + finalResult);

   //console.log("get Length2 animais --> " + value.length);


    if(finalResult > 1 & finalResult <= 2){

      //console.log("Entrei no IF --> ");

      var animal1 = result[1];
      var animal2 = result[0];
      
      lista.push(animal1+" - abrigo");
      lista.push(animal2+" - pessoa 1");

      //console.log("Animais value --> "+value);

      //console.log("Animais --> "+animal1, animal2);

      //for(var i =0; i < value; i++){}

      var animais = ordemAnimais.split(",");

       //lista.push(brinquedosPessoa1, brinquedosPessoa2,ordemAnimais);

      //console.log("Retorna a minha Lista[0] --> "  +lista[0]);
      //console.log("Retorna a minha Lista[1] --> "  +lista[1]);

      // '\x1b[34m%s\x1b[0m' = 'Printa em linha VERDE'
      console.log('\x1b[34m%s\x1b[0m', "Call for 'abrigo2' --> "+(lista));

      return {
        lista: [
          lista[0],
          lista[1]
        ]
      };
        
    }else if(finalResult > 2 & finalResult <= 4){
      
      var animal0 = result[0];
      var animal1 = result[1];
      var animal2 = result[2];
      var animal3 = result[3];

      lista.push(animal0+" - abrigo");
      lista.push(animal1+" - pessoa 2");
      lista.push(animal2+" - abrigo");
      lista.push(animal3+" - abrigo");


      //console.log("Lista Sem ser ordenada" + lista);

      lista.sort();

      //console.log("Lista ordenada "+ lista);

      for(var i = 0; i < result.length; i++){

        //console.log("Animal Pair --> "+result[i]);

         //console.log("Total --> "+lista[i]);


        
      }

      // '\x1b[32m%s\x1b[0m' = 'Printa em linha AZUL'
      console.log('\x1b[32m%s\x1b[0m',"Call for 'abrigo3' --> "+(lista));

      return  {
        lista: [
          lista[0],
          lista[1],
          lista[2],
          lista[3]
        ]
      };
 
    } else{

      // '\x1b[31m%s\x1b[0m' = 'Printa em linha VERMELHA'
      console.log('\x1b[31m%s\x1b[0m',"Call for 'abrigo1' --> "+"{erro: 'Animal inválido'}");

       return {
        erro: 'Animal inválido'
      };
    }

    //console.log("Run the intire list result ---> ")+console.log(lista);

  }
  
}
export { AbrigoAnimais as AbrigoAnimais };