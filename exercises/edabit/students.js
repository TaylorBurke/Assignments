let students = [{ name: 'Steve',}, { name: 'Mike'}, { name: 'John'}];
let namesArr = [];

const getNames = (obj) => {
    obj.map((student)=>{
        namesArr.push(student.name)
    })
};
getNames(students);

console.log(namesArr);

