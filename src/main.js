import configureStore from "./store/configureStore";
import * as actions from "./reducers/main";

const store = configureStore();

store.dispatch(); 