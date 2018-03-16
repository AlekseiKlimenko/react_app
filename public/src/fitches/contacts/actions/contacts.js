export function deleteContact(id) {
    return {
        type: "DELETE_CONTACT",
        payload: {
            id: id
        }
    }
}