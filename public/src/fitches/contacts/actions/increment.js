export function increment(id) {
    return {
        type: "INCREMENT_COUNT",
        payload: {
            id: id
        }
    }
}