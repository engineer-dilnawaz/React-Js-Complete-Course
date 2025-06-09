import { useEffect, useState } from "react";

import Places from "./Places.jsx";
import ErrorPage from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      try {
        const places = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition(function (position) {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({
          message:
            error.message || "Couldn't fetch places please try again later.",
        });
        setIsFetching(false);
      } finally {
        // setIsFetching(false);
      }
    }

    fetchPlaces();
    // fetch("http://localhost:3000/places")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((resp) => setAvailablePlaces(resp.places));
  }, []);

  // console.log(availablePlaces);

  if (error) {
    return (
      <ErrorPage
        title="An error occured"
        message={error.message}
        onConfirm={() => {}}
      />
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
