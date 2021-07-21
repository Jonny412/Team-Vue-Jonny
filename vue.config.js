const path = require("path");
const dd = () => {
    let DD = new Date().getDate();
    if (DD < 10) {
        return '0' + DD;
    } else {
        return DD;
    }
}
const mm = () => {
    let MM = new Date().getMonth() + 1;
    if (MM < 10) {
        return '0' + MM;
    } else {
        return MM;
    }
}
const yy = () => {
    let YY = new Date().getFullYear();
    return YY;
}
const hours = () => {
    let h = new Date().getHours();
    if (h < 10) {
        return '0' + h;
    } else {
        return h;
    }
}
const minutes = () => {
    let mn = new Date().getMinutes();
    if (mn < 10) {
        return '0' + mn;
    } else {
        return mn;
    }

}
//const valoreRelease = (val1, val2) =>{
    
//     if(val2 < 10){
//     val2+=0.1;

//     return val1+val2;
//     }
//    if(val2 >= 10 || val2 === undefined){
//      val2 = 0;
//       return val1+val2; 
//     }

//     // const fs = require('fs');
//     // fs.writeFileSync('./release.json'("release", val2));

//     const fs = require('fs')

//     let content = {
//         val_1 : 1.0,
//         val_2: 0,
//     }
//     let data = JSON.stringify(content);
//     fs.writeFileSync('./release.json', data);

//     //JSON.parse(packageJson).release = val2;


//}


const valoreRelease = () =>{
      
    const fs = require('fs');
    const releaseJson = fs.readFileSync('./release.json');
    const version = JSON.parse(releaseJson).release;
    const nameTemplate = JSON.parse(releaseJson).name;
    const primoNum = JSON.parse(releaseJson).primoNum;
    const secondoNum = JSON.parse(releaseJson).secondoNum;


    console.log(version);
    let addVersion = version + 0.1;
    let n =  addVersion.toFixed(1);
    addVersion = parseFloat(n);

    let totale = primoNum + "." + addVersion;
  
    let newVersion  =  {
        name: nameTemplate,
        primoNum:primoNum,
        secondoNum:addVersion,
        totalRelease: totale,
        release: addVersion
    }
  
    let data = JSON.stringify(newVersion);
  
    fs.writeFileSync('./release.json', data);
  
      console.log(newVersion);
     console.log(n);
      return addVersion;


}

//   const fs = require('fs')
//   const packageJson = fs.readFileSync('./release.json')
//   const version = JSON.parse(packageJson).release
//   const name= JSON.parse(packageJson).name

  //let rilascio = '_' + valoreRelease();
  let dateRelease = '_' + dd() + mm() + yy() + hours() + minutes();
module.exports = {
    // configureWebpack: {
    //     plugins: [
    //         new webpack.DefinePlugin({
    //             'process.env': {
    //                 PACKAGE_VERSION: '"' + version + '"'
    //             }
    //         })
    //     ]
    // },
    outputDir: path.resolve(__dirname, "dist/Relase_" + ' ' + valoreRelease()),
    transpileDependencies: [
        'vuetify'
    ]

}