import Cookies from "js-cookie";

const fetchGames = async () => {
    try {
        const response = await fetch('http://localhost:5000/discover', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Bearer": Cookies.get('BEARER')
            }
        });

        return response.json();

    } catch (error) {
        console.error('Error:', error);
        return {};
    }
}

export default fetchGames;