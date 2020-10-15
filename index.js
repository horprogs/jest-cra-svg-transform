module.exports = {
    process(src, filename) {
        const arr = filename.split('/')
        return `module.exports = { ReactComponent: () => '${arr[arr.length - 1]}' }`
    },
}
