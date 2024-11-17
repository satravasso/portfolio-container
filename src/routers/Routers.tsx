import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { routes } from "./routes"

const browserRouter = createBrowserRouter(routes)

export function Routers() {
  return <RouterProvider router={browserRouter} fallbackElement={<>loading...</>} />
}
