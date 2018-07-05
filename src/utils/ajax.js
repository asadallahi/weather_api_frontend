const api_host = 'https://api.openweathermap.org/data/2.5/forecast?appid=e248183336be05e4e72e5f2c4d7a15ae&';
export default {
    async getCurrentWeather(search_str = null) {
        let search_term = (search_str === null) ? '' : 'q=' + search_str;
        try {
            const response = await
                fetch(
                    api_host + search_term
                );
            return await response.json();
        } catch (error) {
            console.warn(error);
        }
    },
    async getDetails(id) {
        try {
            const response = await
                fetch(
                    "https://api.openweathermap.org/data/2.5/forecast?id=" + id + "&appid=e248183336be05e4e72e5f2c4d7a15ae"
                );
            return await response.json();
        } catch (error) {
            console.warn(error);
        }
    },
}
