export default async function postEvent(body) {
    console.log(body)
  try {
    const response = await fetch("http://localhost:8080/events", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response)
  } catch (error) {
    console.error(error);
  }
}
