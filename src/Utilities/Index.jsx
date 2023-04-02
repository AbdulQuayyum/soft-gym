export const ExerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': import.meta.env.VITE_EXERCISEDB_RAPID_API_HOST,
        'X-RapidAPI-Key': import.meta.env.VITE_EXERCISEDB_RAPID_API_KEY,
    },
};

export const FetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();

    return data;
};