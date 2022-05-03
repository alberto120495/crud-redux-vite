import { types } from "../types";

const initalState = {
  productos: [],
  loading: false,
  error: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case types.AGREGAR_PRODUCTO:
      return {
        ...state,
      };
    default:
      return state;
  }
}
