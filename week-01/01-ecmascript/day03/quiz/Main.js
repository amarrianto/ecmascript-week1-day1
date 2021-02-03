import {listStudent,totalBeasiswa,totalStudent,totalI, totalP, totalR, totalStudentBootcamp } from './Api.js';
import Student,{Regular,Beasiswa} from './Student.js';

function main (){
    //Beasiswa
    const one = new Beasiswa("Asep","Bandung", "S1", "3.45", "","Node JS", "1", "2019","3", 100000);
    console.log(one);
    const two = new Beasiswa("Ami","Bogor","S1","3.10","","Node JS","1","2019", "3", 100000);
    console.log(two);
    const three = new Beasiswa("Budi","Depok","S1", "3.25","","Java", "2", "2020", "3", 100000);
    console.log(three);
    const four = new Beasiswa("Cindy", "Jakarta", "D3", "3.30","", "Java", "2", "2020", "3", 100000);
    console.log(four);
    const five = new Beasiswa("Dedy", "Bekasi", "S2", "2.98","", "Node JS", "1","2019", "4", 100000);
    console.log(five);

    //Regular
    const six = new Regular("Desta", "Jakarta","S1", "3.15","", "Golang","3","2021", "3",	5000000);
    console.log(six);
    const seven = new Regular("Shinta", "Jakarta","S1", "3.15","", "Golang","3","2021", "3",	5000000);
    console.log(seven);
    const eight = new Regular("Meita", "Jakarta","S1", "3.00","", "Python","3","2021", "3",	7000000);
    console.log(eight);

    const nodeJs = totalStudentBootcamp("Node JS",one,two,three,four,five,six,seven,eight);
    const Golang = totalStudentBootcamp("Golang",one,two,three,four,five,six,seven,eight);
    const Python = totalStudentBootcamp("Python",one,two,three,four,five,six,seven,eight);

    console.log("Total Siswa "+totalStudent());
    console.log("Total Beasiswa "+totalBeasiswa());
    console.log("Total Regular "+totalR());
    console.log("Total Intensif "+totalI());
    console.log("Total Net Price "+totalP());
    console.log("Node JS: "+nodeJs);
    console.log("Golang: "+Golang);
    console.log("Python: "+Python);
}

main();