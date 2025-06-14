import { Suspense } from "react";

import {
  json,
  useLoaderData,
  useRouteLoaderData,
  useParams,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

export default function EventDetailPage() {
  // const params = useParams();
  // const data = useLoaderData();
  // const data = useRouteLoaderData("event-detail");
  // return <EventItem event={data.event} />;

  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading Event...</p>}
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading Event...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

async function loadEvent(id) {
  // request.url  => url, query parameters

  // const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  // // shorter way as router dom does the async BTS and returns resolve state
  // return  fetch('http://localhost:8080/events/'+id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  }
  // else {
  //   return response;
  // }

  const data = await response.json();
  return data.event;
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // return { isError: true, message: "could not fetch events" };
    // throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
    //   status: 500,
    // });

    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData;

    // if deferred use then returning changes too
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.id;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.id;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }
  return redirect("/events");
}
