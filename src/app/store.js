import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer  from "../features/user/userSlice";
import movieReducer   from '../features/movie/movieSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

//import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// This line imports two functions from the Redux Toolkit library: configureStore and getDefaultMiddleware. These functions will be used to create and configure the Redux store.

//export default configureStore({

// This line starts the process of creating the Redux store using the configureStore function. The store configuration object is passed as an argument to configureStore.

// reducer: {},

// In this line, the reducer property is specified in the store configuration object. The reducer is the root reducer of your application that combines all the individual reducers.

//middleware: getDefaultMiddleware({})

// The middleware property is also included in the store configuration object. Middleware is used to intercept actions before they reach the reducers. Here, getDefaultMiddleware function is used to get the default middleware provided by Redux Toolkit.

// serializableCheck: false,

// This line specifies the configuration for the default middleware. The serializableCheck option is set to false, which means that Redux Toolkit will not perform serialization checks on the actions. By default, Redux Toolkit checks if actions are serializable, but in some cases (e.g., when using non-serializable data in actions), you might want to disable this check.

// In the code you provided, serializableCheck: false is used to disable this default serialization check. By setting it to false, you are telling Redux Toolkit not to perform the serialization check on dispatched actions. This might be useful in cases where you intentionally need to dispatch actions with non-serializable data, and you are handling serialization in a custom way.

// Certainly! In Redux, when you dispatch an action, that action is converted into a plain JavaScript object that contains information about the action type and any data associated with it. This plain JavaScript object is often referred to as an "action object."

// However, not all JavaScript objects can be easily serialized (converted into a JSON string) and sent over the network or stored in local storage. Certain JavaScript data types, like functions or circular references, cannot be serialized.
