import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom"
import React, { Suspense } from "react"

import { Layout } from "@components"
import { MainPage } from "@pages"

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: `about-me`,
        element: <Suspense fallback='Loading...'>about me</Suspense>,
      },
      {
        path: `git`,
        element: (
          <Suspense fallback='Loading...'>
            <div>git flow</div>
          </Suspense>
        ),
      },
    ],
  },
]

export function Routers() {
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} fallbackElement={<>loading...</>} />
}
