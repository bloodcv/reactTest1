export const promise_one: (param: number) => Promise<PromiseNum> = (param) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (param > 6) {
        reject({
          msg: '数字过大'
        })
      }
      resolve({
        number: param
      })
    }, 2000)
  })
}