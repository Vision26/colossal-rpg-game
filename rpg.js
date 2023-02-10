let readlineSync = require("readline-sync") 
console.log(`hello, welcome to colossal adventure: white noise. all hell has risen from within the asylum and you been thrown as a subject to survive HELL. kill all enemies before they kill you...`)
function randomNumber(max, min) { 
    return Math.floor((Math.random() * max) + min)
}

const player = { 
    name: readlineSync.question("what is your name? "),
    inventory: [],
    attackMax: randomNumber(2, 5),
    attackMin: randomNumber(1, 3),
    hp: 60
}

const createEnemy = function (enemyName) { 
    return {
        name: enemyName,
        hp: randomNumber(40, 20),
        attackMax: randomNumber(3, 5),
        attackMin: randomNumber(2, 1),
    }
}
let monsters = [createEnemy("grim reaper"), createEnemy("asylum runners"), createEnemy("white noise")] 

const items = function (weapons) {
    return {
        items: weapons
    }
}

let gains = [items("scythe"), items("shank"), items("instant death")]

while (player.hp > 0 && monsters.length > 0) {
    let choices = readlineSync.keyIn("[w]alk, [p]rint", { limit: ["w", "p"] })
    if (choices === "w") {
        if (Math.floor(Math.random() * 100 < 33)) {
            const randomEnemy = monsters[randomNumber(monsters.length, 0)]

            while (randomEnemy.hp > 0 && player.hp > 0) {
                let battle = readlineSync.keyIn(`hey ${player.name} you have encounter ${randomEnemy.name} [a]ttack or [r]un`, { limit: ["a", "r"] })
                if (battle === "a") {
                    let playerAttack = randomNumber(player.attackMax, player.attackMin)
                    randomEnemy.hp = randomEnemy.hp - playerAttack
                    console.log(`hey ${player.name} you dealt ${playerAttack} damage to ${randomEnemy.name}, ${randomEnemy.name} hp is ${randomEnemy.hp}`)
                    let enemyAttack = randomNumber(randomEnemy.attackMax, randomEnemy.attackMin)
                    player.hp = player.hp - enemyAttack
                    console.log(`hey ${player.name}, ${randomEnemy.name} dealt ${enemyAttack} damage to you, your hp is ${player.hp}`)
                } else if (Math.floor(Math.random() * 100 < 50)) {
                    console.log(`${player.name} you have escaped`)
                    break
                } else {
                    let enemyAttack = randomNumber(randomEnemy.attackMax, randomEnemy.attackMin)
                    player.hp = player.hp - enemyAttack
                    console.log(`${randomEnemy.name} negated your escape, ${randomEnemy.name} dealt ${enemyAttack} points to ${player.name}, ${player.name} hp is ${player.hp}`)
                }
            }
            if (randomEnemy.hp <= 0) {
                monsters = monsters.filter(function (monster) {
                    return monster !== randomEnemy
                })
                player.hp = player.hp + 3
                let randomItem = gains[randomNumber(gains.length, 0)]
                player.inventory.push(randomItem.items)
                console.log(`${randomEnemy.name} is dead you gained a ${randomItem.items} and 3 hp points, your hp is now ${player.hp} `)

                if (randomEnemy.length < 0) {
                    console.log(`${player.name} you won the game`)
                    break
                }
            }
            if (player.hp <= 0) {
                console.log(`${player.name} you been mutilated, you're dead...`)
                break
            }

        }
    
    } else {
        (choices === "p")
        console.log(`name: ${player.name} hp:${player.hp} inventory: ${player.inventory}`)
    }
}
