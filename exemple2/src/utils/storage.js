export const storage = {
    get(key) {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    },

    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value))
    },

    remove(key) {
        localStorage.removeItem(key);
    },
};