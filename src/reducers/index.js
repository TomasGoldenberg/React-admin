const reducer = (state,action)=>{
    
    switch(action.type){

        case "SET_USER":
            return{
                ...state,
                user: action.payload
            }

        case "FOUND_SALE":
            return{
                ...state,
                found: state.sales.filter( item => item.client.toLowerCase().includes(action.payload.toLowerCase()) )
            }

        case "FOUND_ORDER":
            return{
                ...state,
                found: state.orders.filter( item => item.client.toLowerCase().includes(action.payload.toLowerCase()) )
            }

        case "FOUND_CLIENT":
            return{
                ...state,
                found: state.clients.filter( item => item.name.toLowerCase().includes(action.payload.toLowerCase()) )
            }

        case "FOUND_PRODUCT":
            return{
                ...state,
                found: state.products.filter( item => item.name.toLowerCase().includes(action.payload.toLowerCase()) )
            }

        case "IS_SEARCHING":
            return{
                ...state,
                isSearching: action.payload
            }

        default :
            return state
    }
}
export default reducer