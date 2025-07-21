const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    py: "python"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key])
}

const map = new Map()
map.set("Pk", "Pakistan")
map.set("USA", "United States of America")
map.set("Fr", "France")

for (const key in map) {
    console.log(key)
}