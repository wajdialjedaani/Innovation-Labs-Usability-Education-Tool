const initialState = {
    loading: false,
    items: [],
};

export default function authReducer(
    state = initialState,
    { type, payload }
) {
    switch (type) {
        case "SET_GET_DATA_LOADING":
            return {
                ...state,
                loading: payload,
            };
        case "SET_ITEMS":
            return {
                ...state,
                items: payload,
            };

        default:
            return {
                ...state,
            };
    }
}
