
export const parseRoute = (path) => {

  //as barras indicadas as extremidades do que será indentificado,
  //os dois pontos indicam onde a detecção iniciará,
  //os parênteses indicam um grupo de caracteres,
  //os colchetes indicam a especifividade dos caracteres,
  //os sinais de adição indica para considerar tudo que vinher após,
  // a letra "G" indica que será analisado todas as ocorrências indentificados
  const routeRegex = /:([a-zA-Z]+)/g;
  
  const params = path.replaceAll(routeRegex, '(?<id>[a-z0-9-_]+)');

  const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`);


  return pathRegex;

}