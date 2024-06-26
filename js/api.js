
export function fetchData(page) {
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