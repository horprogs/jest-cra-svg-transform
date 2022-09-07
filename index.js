module.exports = {
    process(src, filename) {
        const arr = filename.split('/')
        return {
            code: `module.exports = { ReactComponent: () => '${arr[arr.length - 1]}' }`
        }
    },
}
