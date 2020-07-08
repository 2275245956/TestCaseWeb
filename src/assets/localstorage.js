var storage = {
    setItem (itemname, itemvalue) {
        window.localStorage.setItem(itemname, itemvalue);
    },
    getItem (itemname) {
        return window.localStorage.getItem(itemname)
    },
    removeItem (itemname) {
        return window.localStorage.removeItem(itemname)
    }
}

export default storage