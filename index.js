<<<<<<< HEAD
function saturdayFun(myjob='roller-skate'){
  return (`This Saturday, I want to ${myjob}!`);
=======
function saturdayFun(activity='roller-skate'){
  return (`This Saturday, I want to ${activity}!`);
>>>>>>> c881377d03d28338d142980efa0453fa52c5e7e0
}

function mondayWork (activity='go to the office'){
  return `This Monday, I will ${activity}.`;
}


<<<<<<< HEAD
function wrapAdjective (anything='*'){
  return function human(word='special'){
    return `You are ${anything}${word}${anything}!`;
=======
function wrapAdjective (fu='*'){
  return function human(word='special'){
    return `You are ${fu}${description}${fu}!`;
>>>>>>> c881377d03d28338d142980efa0453fa52c5e7e0
  }
}

const Calculator ={
  add: (a,b) => a+b,
  subtract: (a,b) => a-b,
  multiply: (a,b) => a*b,
  divide: (a,b) => a/b,
}


function actionApplyer(num, arrays){
  if(arrays.length === 0)
    return num
  else {
    return ((num * 2) + 1000) % 7
  }
}