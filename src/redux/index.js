import { actions } from "./actions";

const INITIAL_STATE = {
    userName: "",
    theme: false,
}

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type){


        case actions.setUserName:
            return{
                ...state,
                userName: action.payload 
            };
        case actions.setTheme:
            return{
                ...state,
                theme: action.payload
            }
            

        default:
	        return state;
  }
}

export default reducer;