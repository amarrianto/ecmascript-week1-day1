import Student, {Regular, Beasiswa} from './Student.js';
export const listStudent = (...list) =>{
    return list;
}

export const totalBeasiswa = function(){
    return Beasiswa.totalBeasiswa;
}

export const totalStudent = function(){
    return Student.totalStudent;
}

export const totalR = function(){
    return Regular.totalR;
}

export const totalI = function(){
    return Beasiswa.totalI;
}

export const totalP = function(){
    return Regular.totalP;
}

export const totalStudentBootcamp = (bootcamp,...list) => {
    let count = 0;
    for (const i of list){
        if (i.bootcamp === bootcamp){
            count ++;
        }
    }
    return count;
}