// Funcion para traer un solo rocket por pagina
export function fetchSingleRocketData(page) {
    return fetch('https://api.spacexdata.com/v4/rockets/query', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: {},
        options: {
          page,
          limit: 1,
        },
      }),
    })
      .then(response => response.json())
      .catch(error => console.error(error));
  }

// Funcion para traer todos los rockets
export function fetchAllRocketsData(){
  return fetch('https://api.spacexdata.com/v4/rockets/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {},
    }),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}

// Funcion para traer todas las capsulas
export function fetchAllCapsulesData(){
  return fetch('https://api.spacexdata.com/v4/capsules/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {},
    }),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}

// Funcion para traer una sola capsula por pagina
export function fetchSingleCapsuleData(page) {
  return fetch('https://api.spacexdata.com/v4/capsules/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        page,
        limit: 1,
        populate: ['launches']
      },
    }),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}

// Funcion para traer un solo integrante de crew por pagina
export function fetchSingleCrewData(page) {
  return fetch('https://api.spacexdata.com/v4/crew/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        page,
        limit: 1,
        populate: ['launches']
      },
    }),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}

// Funcion para traer un solo lanzamiento por pagina
export function fetchSingleLaunchData(page) {
  return fetch('https://api.spacexdata.com/v4/launches/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        page,
        limit: 1,
        populate: ['launchpad', 'rocket', 'cores.core']
      },
    }),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}

