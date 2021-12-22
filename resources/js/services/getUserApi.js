export async function getUserApi() {
    try {
        const response = await axios.get('/Api/user');
        return response.data;
    } catch (error) {
        return null;
    }
}
