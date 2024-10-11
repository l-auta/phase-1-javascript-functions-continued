// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
};
//saturdayFun("bathe my dog");

let mondayWork = function (act = 'go to the office'){
    return `This Monday, I will ${act}.`
};

let wrapAdjective = function(highlight = '*'){
    return function (quality = 'special') {
        return `You are ${highlight}${quality}${highlight}!`
    }
}
