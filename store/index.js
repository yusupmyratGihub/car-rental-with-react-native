import { useReducer, createContext, useContext } from "react";
import { vehiclesInitialState } from "./vehicles/vehical-initial-state";
import { vehiclesReducer } from "./vehicles/vehicles-reducer";
//Bosh bir merkezi state olushturduk
const Store = createContext(null);

//Merkezi state in diger componentlerde kolayca kullanilmasi icin bir hook olshturduk
export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
  const [vehiclesState, dispatchVehicles] = useReducer(
    vehiclesReducer,
    vehiclesInitialState
  );
  const providerValues = { vehiclesState, dispatchVehicles };
  return <Store.Provider value={providerValues}>{children}</Store.Provider>;
};
