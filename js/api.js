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

// Funcion para traer un solo core por pagina
export function fetchSingleCoreData(page) {
  return fetch('https://api.spacexdata.com/v4/cores/query', {
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

// Funcion para traer un solo landpad por pagina
export function fetchSingleLandpadData(page) {
  return fetch('https://api.spacexdata.com/v4/landpads/query', {
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

// Funcion para traer un solo ship por pagina
export function fetchSingleShipData(page) {
  return fetch('https://api.spacexdata.com/v4/ships/query', {
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


// Funcion para traer dataa de la compañia
export function fetchCompanyInfo() {
  return fetch('https://api.spacexdata.com/v4/company')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => console.error('Error:', error));
}

// Funcion para traer un solo dragon por pagina
export function fetchSingleDragonData(page) {
  return fetch('https://api.spacexdata.com/v4/dragons/query', {
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

// Funcion para traer una sola historia por pagina
export function fetchSingleHistoryData(page) {
  return fetch('https://api.spacexdata.com/v4/history/query', {
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

// Funcion para traer un solo launchpad por pagina
export function fetchSingleLaunchpadData(page) {
  return fetch('https://api.spacexdata.com/v4/launchpads/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        page,
        limit: 1,
        populate: ['rockets']
      },
    }),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
}