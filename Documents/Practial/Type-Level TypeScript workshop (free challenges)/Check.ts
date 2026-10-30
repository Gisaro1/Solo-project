type MinMax = Readonly<[number,number]>
function minMax(arr:number[]):MinMax{
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  return [min,max]
}
