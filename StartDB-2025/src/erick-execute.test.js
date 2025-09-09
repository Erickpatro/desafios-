import { } from "./erick-execute.js";



  test('Verifica formato da lista de animais', () => {
  const resultado = gerarResultado();

  expect(resultado.lista[0]).toBe('Fofo - abrigo');
  expect(resultado.lista[1]).toBe('Rex - pessoa 1');
  expect(resultado.lista.length).toBe(2);
});



function gerarResultado() {
  return {
    lista: [
      'Fofo - abrigo',
      'Rex - pessoa 1'
    ]
  };
}