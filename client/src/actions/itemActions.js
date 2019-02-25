import axios from 'axios';
export const RETRIVED_ITEMS = 'items:retrievedItems';

export default function RetrieveItems() {
    return (dispatch) => {
        const url = '/api/item';
        return axios.get(url)
            .then(items => {
                dispatch({
                    type: RETRIVED_ITEMS,
                    payload: items.data
                });
                return items;
            })
    }
}

