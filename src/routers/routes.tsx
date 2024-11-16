import Layout from "@components/Layout"
import MainPage from "@pages/MainPage"
import React, { Suspense } from "react"
import { RouteObject } from "react-router-dom"

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
        element: <Suspense fallback="Loading...">about me</Suspense>,
      },
      {
        path: `git`,
        element: (
          <Suspense fallback="Loading...">
            <div>git lfow</div>
          </Suspense>
        ),
      },
    ],
  },
]
