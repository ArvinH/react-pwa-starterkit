import * as redux from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {applyMiddleware} from 'redux'

export default function createStore () {
  const store = redux.createStore(
    require('./reducers'),
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  )

  if (module.hot) {
    const replaceRootReducer = () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer);
    }

    const reducerModules = [
      './reducers'
    ]

    reducerModules.forEach(path => module.hot.accept(path, replaceRootReducer))
  }

  return store
}