function anagram(s1, s2) {
  let f1 = {}
  let f2 = {}
  if (s1.length !== s2.length) return false

  for(let i; i < s1.length; i++) {
    f1[s1[i]] = (f1[s1[i]] || 0) + 1
    f2[s2[i]] = (f2[s2[i]] || 0) + 1
  }

  for(let key in f1) {
    if (f2[key] !== f1[key]) return false
  }
  return true
}

let s1 = 'anagram'
let s2 = 'anagram'
console.log(anagram(s1, s2))