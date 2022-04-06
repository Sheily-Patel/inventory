import React, { useReducer, createContext, useEffect, useState } from "react";

export const CHECKOUT_STEPS = {
  AUTH: "auth",
  SHIPPING: "shipping",
  PAYMENT: "payment"
};

const initialState = {
  step: CHECKOUT_STEPS.AUTH,
  shippingAddress: null
};

export const CheckoutStateContext = createContext();
export const CheckoutDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_CHECKOUT_STEP":
      return {
        ...state,
        step: action.payload.step
      };
    case "SET_SHIPPING_ADDRESS":
      return {
        ...state,
        shippingAddress: action.payload.shippingAddress
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const Checkout = ({ children }) => {
  const [checkoutState, setCheckoutState] = useState('');
  const persistedCheckoutState = {
    ...initialState,
    shippingAddress: checkoutState || {}
  };
  const [state, dispatch] = useReducer(reducer, persistedCheckoutState);

  useEffect(() => {
    setCheckoutState(state.shippingAddress);
  }, [state.shippingAddress]);
  return (
    <CheckoutDispatchContext.Provider value={dispatch}>
      <CheckoutStateContext.Provider value={state}>
        {children}
      </CheckoutStateContext.Provider>
    </CheckoutDispatchContext.Provider>
  );
};

export const setCheckoutStep = (dispatch, step) => {
  return dispatch({
    type: "SET_CHECKOUT_STEP",
    payload: {
      step
    }
  });
};

export const saveShippingAddress = (dispatch, shippingAddress) => {
  dispatch({
    type: "SET_SHIPPING_ADDRESS",
    payload: {
      shippingAddress
    }
  });
  return setCheckoutStep(dispatch, CHECKOUT_STEPS.PAYMENT);
};

export default Checkout;
