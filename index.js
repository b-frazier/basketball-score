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

function addTwoAway(){
    awayScore += 2
    awayScoreEl.textContent = awayScore
}

function addThreeAway(){
    awayScore += 3
    awayScoreEl.textContent = awayScore
}

let newGame = document.getElementById('new-game')

function reset(){
    homeScore = 0
    homeScoreEl.textContent = homeScore
    awayScore = 0
    awayScoreEl.textContent = awayScore
}

// included a reset to set scores back to zero. 
// used context clues from other button code the reset.

