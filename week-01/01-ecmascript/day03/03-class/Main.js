import Car,{Taxi,Angkot} from './Car.js'
import {listCar}  from './ApiCar.js';

function main (){
    const hrv = new Car("Honda",2015);
    console.log(hrv);
    const grab = new Taxi("Honda","2020","Grab");
    
    console.log(grab);
    console.log(grab.totalRevenue(4000.00,2));

    const gojek = new Taxi("Gojek");
    const bird = new Taxi("Blue Bird");
    //console.log(gojek);
   // console.log(gojek.sayHi("gojek"));
    console.log(`Total Car : ${Car.totalCar}`);

    const cars = listCar(hrv,grab,gojek,grab);
    console.log(cars);
}

main();