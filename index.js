let homeScoreEl = document.getElementById('home-score')
let homeScore = 0


function addOneHome(){
    homeScore += 1
    homeScoreEl.textContent = homeScore

}

function addTwoHome(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreeHome(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let awayScoreEl = document.getElementById('away-score')
let awayScore = 0

function addOneAway(){
    awayScore += 1
    awayScoreEl.textContent = awayScore
}

