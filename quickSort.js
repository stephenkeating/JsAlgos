// quick sort algo


// pivot helper

let pivot = (arr) => {
  let e1 = arr[0]
  let idx = 0
  for (let i = 1; i < arr.length; i++) {
    let e2 = arr[i]
    if (e1 > e2) {
      idx++
       
    }
  }
  return idx
}