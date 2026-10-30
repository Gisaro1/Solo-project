function describe(a:string | number) : "text" | "number" {
  if(typeof a === "string") {
    return "text"
  } else {
    return "number"
  }
}