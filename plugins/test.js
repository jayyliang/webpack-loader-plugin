class EndWebpackPlugin {
    constructor(doneCallback, failedCallback) {
        this.doneCallback = doneCallback
        this.failedCallback = failedCallback
    }
    apply(complier) {
        complier.plugin('done', data => {
            this.doneCallback(data)
        })
        complier.plugin('failed', err => {
            this.failedCallback(err)
        })
    }
}
module.exports = EndWebpackPlugin