class Province{
  constructor(provinceName,districts,sectors,){
  
this.provinceName=provinceName;
this.districts=districts;
this.sectors=sectors;


  }
}
const eastern= new Province('eastern province',['Bugesera','Nyagatare','Rwamagana','kirehe'],['rwamakuba','sake','muhazi','kageyo'])
console.log(eastern);

const western= new Province('eastern province',['Karongi','Rusizi'],['kivu','gasiza','kamegeri'])
console.log(western)
class District  extends Province {
 constructor(districtname,sectors){
  super(null,null,sectors)
  this.districtname=districtname;
  this.sectors=sectors
 }

}``
const districts=new District('nyagatare',['rwimiyaga','kabare'])

console.log(districts)

// function to get province details by name
function getProvince(provinceName, callback) {
  let foundProvince;
  switch(provinceName) {
    case 'eastern province':
      foundProvince = eastern;
      break;
    case 'western province':
      foundProvince = western;
      break;
    default:
      foundProvince = null;
  }
  return callback(null, foundProvince);
}

// function to get districts by province
function getDistrictsByProvince(provinceName, callback) {
  getProvince(provinceName, (err, province) => {
    if (err) {
      return callback(err);
    }
    return callback(null, province.districts);
  });
}

// function to get sectors by district
function getSectorsByDistrict(districtName, callback) {
  let foundDistrict;
  switch(districtName) {
    case 'nyagatare':
      foundDistrict = districts;
      break;
    default:
      foundDistrict = null;
  }
  return callback(null, foundDistrict.sectors);
}

