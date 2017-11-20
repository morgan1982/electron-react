let obj = {
    name: "John",
    lastName: "Doe",
    age: 25,
    genre: "male"
}

let res = Object.values(obj).map((value) => {
    return value;
})

console.log(res);
