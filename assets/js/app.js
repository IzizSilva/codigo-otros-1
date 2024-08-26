const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('#name');//Se cambio la función al id correcto con el #
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');


  async function name() { // Se pone una función asincrona ya que se esta realizando una promesa
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const usersEndpoint = await response.json();//Se pasa a Fetch en formato json para que puedan ser leidos
  const username = await response.json();
  console.log(data);
  displayUser(username); //Se pone abajo ya que no estaba definida
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);