class AbrigoAnimais {

  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {

    let lista = [];

    var value = new String(ordemAnimais);

    var result =  value.split(",");

    var finalResult = result.length;

  
    if(finalResult > 1 & finalResult <= 2){

     
      var animal1 = result[1];
      var animal2 = result[0];
      
      lista.push(animal1+" - abrigo");
      lista.push(animal2+" - pessoa 1");

      

      var animais = ordemAnimais.split(",");

    
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


      

      lista.sort();

      

      for(var i = 0; i < result.length; i++){

     


        
      }

      
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

   
      console.log('\x1b[31m%s\x1b[0m',"Call for 'abrigo1' --> "+"{erro: 'Animal inválido'}");

       return {
        erro: 'Animal inválido'
      };
    }

  

  }
  
}
export { AbrigoAnimais as AbrigoAnimais };
