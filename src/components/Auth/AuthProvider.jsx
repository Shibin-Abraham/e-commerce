import { createContext, useReducer } from "react"

const DispatchContext = createContext()
const StateContext = createContext()


function AuthProvider(props) {
    const initialState = {
        authentication: false,
        name: '',
        email: '',
        type: '',
        cart: []
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case 'auth_login':
                return {
                    ...state,
                    authentication: true,
                    name: action.name,
                    email: action.email,
                }
            case 'cart_data':
                return {
                    ...state,
                    cart: [...state.cart, action.cart]
                }
            case 'auth_logout':
                return { ...state, authentication: false, name: '' }
            default: {
                return state;
            }
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log("auth provider", state)
    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {props.children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    )
}

export { AuthProvider, DispatchContext, StateContext }
