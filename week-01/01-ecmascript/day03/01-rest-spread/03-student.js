const student = {
    nama : "amar",
    kota : "depok"
}

let infoStudent = student;
infoStudent = {...student, bootcamp:"js"};
console.log(infoStudent);

infoStudent = {...infoStudent, totalPoint:80};
console.log(infoStudent);

//hasil

// {nama: 'amar', kota: 'depok', bootcamp: 'js'}

// {nama: 'amar', kota: 'depok', bootcamp: 'js', totalPoint: 80}
