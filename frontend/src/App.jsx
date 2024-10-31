import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import Layout from "./pages/Layout";
import EventsLayout from "./pages/EventsLayout";
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Layout/>,
      children:[
        {
          path: "/Home",
          element: <HomePage />,
        },
        {
          path: "events",
          element: <EventsLayout/>,
          children:[
            {
              index:true,
              element: <EventsPage />,
            },
            {
              path: ":eventId",
              element: <EventDetailPage />,
            },
            {
              path: "new",
              element: <NewEventPage />,
            },
            {
              path: ":eventId/edit",
              element: <EditEventPage />,
            },
          ]
        },
      ]
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
