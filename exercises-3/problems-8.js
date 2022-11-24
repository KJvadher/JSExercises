/*
    You will be given a sequence of letters.
    When an uppercase and lowercase of the same letter touch, they destroy each other.
    After they have been removed, the process continues until there are no more letters reacting

    For example:
    "xYyZZX" => "xZZX"
    "aBbA" => ""
*/

function react(sequence) {
    var news= sequence.split(/(?=[A-Z])/);
    let g = []
    //console.log(news[1].length)
    for(let i = 0; i< news.length; i++){
        if(news[i].length == 1){
            g.push(news[i])
            
        }
    }
    return g
}

// Do not modify this code
window.solutions = window.solutions || {}
window.solutions.react = react