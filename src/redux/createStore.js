import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './reducers'

export default function _createStore () {
  console.log('rootReducer', rootReducer)

  let middleware = applyMiddleware(
    thunkMiddleware,
    createLogger()
  )

  const store              = createStore(
    rootReducer,
    middleware
  )

  if (module.hot) {
    const replaceRootReducer = () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer);
    }

    const reducerModules = [
      './reducers'
    ]

    reducerModules.forEach(path => module.hot.accept(path, replaceRootReducer))
  }

  return store
}