/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let length = preferences.length, count = 0, a, b, c;
  if(preferences.length < 2) return 0;
  for(let i = 0; i <= length; i++){
    a = preferences[i];
    b = preferences[a - 1];
    c = preferences[b - 1];
    if(a > c &&  c < b && c - 1 == i){
      count++;
    }
  }
  return count;
};
//console.log(getLoveTrianglesCount([6, 14, 12, 21, 3, 20, 7, 15, 16, 16, 14, 4, 11, 13, 18, 2, 1, 8, 3, 1, 12]))