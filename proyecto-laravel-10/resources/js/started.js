const data = () => {
  return {
    message: '',
    counter: 0,
    add: function () {
      this.counter++
    },
    subs: function () {
      this.counter--
    }
  }
}

export default data