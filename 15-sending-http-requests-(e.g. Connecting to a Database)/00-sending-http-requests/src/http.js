export async function fetchAvailablePlaces() {
  const resp = await fetch("http://localhost:3000/places");
  if (!resp.ok) {
    // spData.ok => 200, 300 status code || !respData.ok => 400, 500 status code
    // const error = new Error('Failed to fetch places');
    throw new Error("Failed to fetch places");
  }
  const respData = await resp.json();

  return respData.places;
}

export async function updateUserPlaces(places) {
  const resp = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!resp.ok) {
    throw new Error("Failed to update user data.");
  }
  const resData = await resp.json();
  return resData.message;
}

export async function fetchUsersPlaces() {
  const resp = await fetch("http://localhost:3000/user-places");
  if (!resp.ok) {
    // spData.ok => 200, 300 status code || !respData.ok => 400, 500 status code
    // const error = new Error('Failed to fetch places');
    throw new Error("Failed to fetch user places");
  }
  const respData = await resp.json();

  return respData.places;
}
