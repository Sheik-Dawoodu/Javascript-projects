let food="Erode"
switch (food){
    case "Erode":console.log("Killu Kari Region Delicacies of  Erode")
    break;

    case  "Madurai":console.log("Bun Parotta Region Delicacies of   Madurai")
    break;

    case "Coimbatore" :console.log("Arisi Paruppu Sadam Region Delicacies of  Coimbatore")
    break;

    case "Chennai":console.log("Uttapam. Uttapam or ooththappam Region Delicacies of  Chennai")
    break;

    case "Bengaluru":console.log("Rava Idli Region Delicacies of  Bengaluru")
    break;

    case "Tirunelveli" :console.log("Nellai Sambar. Region Delicacies of  Tirunelveli")
    break;
    default:
    console.log("Sorry i no the data");
}

const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let week=new Date();
let day=days[week.getDay()]

console.log(day);