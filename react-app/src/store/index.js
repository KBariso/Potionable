import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import project from './singleProject'
import allProjectsReducer from './allProjects';
import commentsReducer from './comments';
import searchReducer from './search';
import stepReducer from './step';


const rootReducer = combineReducers({
  session,
  project:project,
  projects:allProjectsReducer,
  comments: commentsReducer,
  search: searchReducer,
  steps: stepReducer

});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
