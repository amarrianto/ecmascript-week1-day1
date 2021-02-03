export default class Student{
    static totalStudent=0;
    constructor(fullname, city, education, grade,bootcamp, batch, year, skillPoint){
        this.fullname = fullname;
        this.city = city;
        this.education = education;
        this.grade = grade;
        this.bootcamp = bootcamp;
        this.batch = batch;
        this.year = year;
        this.skillPoint = skillPoint;
        Student.totalStudent++;
    }
}

class Regular extends Student{
    static totalR = 0;
    static totalP = 0;
    constructor(fullname,city,education,grade,type,bootcamp,batch,year,skillPoint,netPrice){
        super(fullname,city,education,grade,bootcamp,batch,year,skillPoint)
        this.type = 'Regular';
        this.netPrice = netPrice;
        Regular.totalR++;
        Regular.totalP += netPrice
    }

    // totalIsentifP(insentifP){
    //     return insentifP = insentifP + insentifP;
    // }
}

class Beasiswa extends Student{
    static totalBeasiswa = 0;
    static totalI = 0;
    constructor(fullname,city,education,grade,type,bootcamp,batch,year,skillPoint,insentif){
        super(fullname,city,education,grade,bootcamp,batch,year,skillPoint);
        this.type = 'Beasiswa';
        this.insentif = insentif;
        Beasiswa.totalBeasiswa++;
        Beasiswa.totalI += insentif
    }

    // totalIsentifP(insentifP){
    //     return insentifP = insentifP + insentifP;
    // }
}

export {Regular,Beasiswa};