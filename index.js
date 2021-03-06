module.exports = resolve

function resolve (promise) {
  var result = Object.create(null)

  return promise
    .then(function (data) {
      result.err = null
      result.value = data
      return result
    })
    .catch(function (err) {
      result.err = err
      return result
    })
}
