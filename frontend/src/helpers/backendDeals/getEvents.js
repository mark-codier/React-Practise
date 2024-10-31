export default async function getEvents() {
  try {
    const response = await fetch("http://localhost:8080/events", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data.events; // Return only the events data
  } catch (error) {
    console.error(error);
  }
}