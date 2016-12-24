/**
 * Render the react app on the server first (including fetching data)
 *
 * This means we can render much more quickly on mobile devices
 */

import React from 'react'
import {Provider} from 'react-redux'
import Router from 'express'
import {getStore} from '../../src/redux/store'
import _routes from '../../src/routes'
import {match, RouterContext} from 'react-router'
import {renderToString} from 'react-dom/server'

const router = Router()

router.get('*', (req, res, next) => {
  const location = req.url
  const routes   = _routes()

  match({routes, location}, (err, redirectLocation, renderProps) => {
    if (err) return next(err)

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    }

    if (!renderProps) {
      return next(new Error(`No render props when attempting to render ${req.url}`))
    }

    const components = renderProps.components

    // If the component being shown is our 404 component, then set appropriate status
    if (components.some((c) => c && c.displayName === 'error-404')) {
      res.status(404)
    }

    const Comp = components[components.length - 1].WrappedComponent

    const fetchData = (Comp && Comp.fetchData) || (() => Promise.resolve())

    const store = getStore()

    const {location, params, history} = renderProps

    fetchData({store, location, params, history})
      .then(() => {
        const appBody = renderToString(
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        )

        const state = store.getState()

        const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React PWA</title>
  <link rel="manifest" href="/manifest.json">

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <meta name="apple-mobile-web-app-title" content="PWA">
</head>
<body>
  <div id="root">${appBody}</div>
  <script>
      window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
  </script>
  <script src="/dist/bundle.js"></script>
</body>
</html>`
        res.send(html)
      })
      .catch((err) => next(err))

  })
})

export default router