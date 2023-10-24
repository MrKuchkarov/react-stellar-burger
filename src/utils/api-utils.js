export const createOptions = (method, data, token) => {
    return {
        method,
        headers: {
            "Content-Type": "application/json",
            Authorization: token || "",
        },
        body: JSON.stringify(data),
    };
};

export const checkResponse = (response) => {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(response);
};

export const request = (url, options) =>
    fetch(url, options).then(checkResponse);