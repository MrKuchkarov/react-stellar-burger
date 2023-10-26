export const createOptions = (method, data, token) => {
    return {
        method,
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: token || "",
        },
        body: JSON.stringify(data),
    };
};


export const checkReponse = (response) => {
    return response.ok ? response.json() : response.json().then((err) => Promise.reject(err));
};

export const request = (url, options) =>
    fetch(url, options).then(checkReponse);