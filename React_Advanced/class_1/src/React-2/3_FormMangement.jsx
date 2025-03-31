import React, { useReducer } from 'react';


const initialFormState = {
  firstName: "",
  lastName: "",
};

const constant = {
    UPDATE_FIRST_NAME: "firstName",
    UPDATE_LAST_NAME: "lastName",
    CLEAR: "clear"

}

const reducerFunction = (state, action) => {
  switch (action.type) {
    case constant.UPDATE_FIRST_NAME:
      return { ...state, firstName: action.payload }; // merge state
    case constant.UPDATE_LAST_NAME:
      return { ...state, lastName: action.payload }; // merge state
    case constant.CLEAR:
      return { firstName: "", lastName: "" }; // reset state
    default:
      return state; // return current state
  }
};

function FormMangement() {
    const [formState, dispatch] = useReducer(reducerFunction, initialFormState);
    return (
        <form >
            <input
                type="text"
                value={formState.firstName}
                onChange={(e) => { dispatch({ type: constant.UPDATE_FIRST_NAME, payload: e.target.value }) }} />
            <input type="text"
                value={formState.lastName} 
                onChange={(e) => { dispatch({ type: constant.UPDATE_LAST_NAME, payload: e.target.value }) }} />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    dispatch({ type: constant.CLEAR })

                }}>Clear Fields</button>
        </form>
    )
}

export default FormMangement;