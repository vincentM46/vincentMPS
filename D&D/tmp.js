
function question() {
    let question = prompt("Would you like to play again?")
    if (question == "yes")
        fight()
    else if (question === "no")
        alert("Thank you for playing.")
    else
        question()
}

function fight() {
    const monster = prompt("What would you like to name the monster?")
    const hero = prompt("What would you like to name yourself?")
    let monsterHealth = 50
    let heroHealth = 50
    let msg = ""

    while (monsterHealth > 0 && heroHealth > 0) {
        let heroDiceRoll = Math.ceil(Math.random() * 20)
        let monsterDiceRoll = Math.ceil(Math.random() * 20)
        msg = ""
        if (heroDiceRoll <= 2) {
            msg += `Critical failure! ${hero} accidentally stabs self!\n`
            heroHealth -= 5
        } else if (heroDiceRoll >= 3 && heroDiceRoll <= 10) {
            msg += `${hero} misses!\n`
        } else if (heroDiceRoll >= 11 && heroDiceRoll <= 18) {
            msg += `Hit! ${hero} strikes ${monster}!\n`
            monsterHealth -= 10
        } else if (heroDiceRoll >= 19 && heroDiceRoll <= 20) {
            msg += `Critical hit! ${hero} does double damage!\n`
            monsterHealth -= 20
        }

        if (monsterDiceRoll <= 2) {
            msg += `Critical failure! ${monster} accidentally stabs self!\n`
            monsterHealth -= 5
        } else if (monsterDiceRoll >= 3 && monsterDiceRoll <= 10) {
            msg += `${monster} misses!\n`
        } else if (monsterDiceRoll >= 11 && monsterDiceRoll <= 18) {
            msg += `Hit! ${monster} strikes ${hero}!\n`
            heroHealth -= 10
        } else if (monsterDiceRoll >= 19 && monsterDiceRoll <= 20) {
            msg += `Critical hit! ${monster} does double damage!\n`
            heroHealth -= 20
        }
        msg += `${hero} has ${heroHealth} hitpoints left. ${monster} has ${monsterHealth} hitpoints left.`
        alert(msg)
    }
    if (monsterHealth <= 0 && heroHealth <= 0)
        msg = `${monster} and ${hero} are dead, it's a draw!`
    else if (monsterHealth <= 0)
        msg = `${monster} has lost to  ${hero}. The world is safe!... for now.`
    else if (heroHealth <= 0)
        msg = `${hero} has lost to  ${monster}. The world is unsafe!`
    alert(msg)
    question()
}

fight()
