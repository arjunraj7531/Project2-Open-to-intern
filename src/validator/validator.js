
const isValidEntry = function (value) {
    if (typeof value === "undefined" || value === null) return false;

    if (typeof value === 'string' && value.trim().length === 0) return false

    return true;
}

//=============================// isValidImage //==============================
     
const isValidImage = function(value){
    let imageRegex = /^(https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$)/
    if(imageRegex.test(value)){
      return true
    }else {
      return false
       }
      }

module.exports = { isValidEntry, isValidImage}