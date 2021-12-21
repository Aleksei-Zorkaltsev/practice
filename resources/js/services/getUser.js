export async function getUser() {
    try {
        const response = await axios.get('/Api/user');
        return response.data;
    } catch (error) {
        return null;
    }
}
