// console.log(Math.floor((Math.random()*100<33)))
// if(console.log(Math.floor(Math.random() * 100 < 33))){
//     const enemy=enie
// }



// while(conditions for ame continuing enemies existing, so long as you are alive){
// walk funciton
// wwwwwwwww 1/3 chance every time you hit w

//     while(run for attack sequence and will end when you or enemy dies){
// Attack
//     }
// }
var readlineSync = require("readline-sync")

//Introduction/Fun Message
var user = readlineSync.question("Please Enter Name:")

console.log("Hi " + user + "..." + " Welcome to Colossal Adventure: White Noise. As far as you know, you have no trace of your own past, no home to return to, and no answers to what has happened to you. With only the moon in sight, you stand in the midst of dark fog in the middle of a road in a dense forest. Barely visible, up north you notice a shelter and down south from where you stand you hear sound traces of river flow. With not a single trace of human contact, you stand in deafning silence with nothing but yourself. *A note is left*: 'You are not alone...run.'")

function attackPower(num1) {
    let powerAttack = Math.floor(Math.random() * num1)
    console.log(powerAttack)
    return powerAttack
}

//player

const player = {
    name: user,
    HP: 100,
    inventory: [],
    attack: attackPower(25)
}

//Enemies

function Enemies(type, life, status, item, hp) {
    this.type = type
    this.life = life
    this.status = status
    this.item = item
    this.hp = hp
}

const grimReaper = new Enemies("Grim Reaper",80, "A dark hooded enemy. More than a demon less than a spirit. Ready to cut down anything with its sharp scythe", "Scythe", 35)
const asylumRunner = new Enemies("Asylum Runner", 35, "Insane asylum escapees, ready to kill anything they come across with", "Shank", 20)
const whiteNoise = new Enemies("White Noise", 150, "Cover your ears, she'll give you an instant death...", "Instant Death Orb; Enemy Kill Ko", 50)

const monsters = []

monsters.push(grimReaper, asylumRunner, whiteNoise)

function attack() {

    // let attackRandomNumber = Math.random()
    let damage = function(){
        if(player.attack - monsters.life){
            console.log(damage)
        }
    }

    if (Math.floor(Math.random() * 100 < 33)) {
        if(player.attack - monsters.life){
            console.log(damage)
            // player.inventory.push(monsters.item)
            // console.log("item awarded")
    
            walk()
        }

    } else if (Math.floor(Math.random() * 100 < 33)) {
        console.log("attacked missed, and enemie killed you")
        isAlive = false
    }
}


var readlineSync = require("readline-sync")

//Introduction/Fun Message
var user = readlineSync.question("Please Enter Name:")

console.log("Hi " + user + "..." + " Welcome to Colossal Adventure: White Noise. As far as you know, you have no trace of your own past, no home to return to, and no answers to what has happened to you. With only the moon in sight, you stand in the midst of dark fog in the middle of a road in a dense forest. Barely visible, up north you notice a shelter and down south from where you stand you hear sound traces of river flow. With not a single trace of human contact, you stand in deafning silence with nothing but yourself. *A note is left*: 'You are not alone...run.'")

//make a random number function

function attackPower(num1) {
    let powerAttack = Math.floor(Math.random() * num1)
    return powerAttack
}

//player

const player = {
    name: user,
    HP: 100,
    inventory: [],
    attack: attackPower(25)
}

//Enemies

function Enemies(type, life, status, item, hp) {
    this.type = type
    this.life = life
    this.status = status
    this.item = item
    this.hp = hp
}

const grimReaper = new Enemies("Grim Reaper", 80, "A dark hooded enemy. More than a demon less than a spirit. Ready to cut down anything with its sharp scythe", "Scythe", 35)
const asylumRunner = new Enemies("Asylum Runner", 35, "Insane asylum escapees, ready to kill anything they come across with", "Shank", 20)
const whiteNoise = new Enemies("White Noise", 150, "Cover your ears, she'll give you an instant death...", "Instant Death Orb; Enemy Kill Ko'", 50)

const monsters = []

monsters.push(grimReaper, asylumRunner, whiteNoise)

let isAlive = true

let startGame = readlineSync.question("Do you want to start the game [y] [n] [p]?", { limit: ["y", "n", "p"] })

if (startGame === "y") {
    while (isAlive) {
        const walkOrDisplay = readlineSync.keyIn("Do you want to [w]alk? ", { limit: ["w", "i"] })
        if (walkOrDisplay === "w") {
            let randomMonster = monsters[Math.floor(Math.random() * monsters.length)]
            if(randomMonster > 0, randomMonster < .50){}
    
            if (Math.floor(Math.random() * 100 < 33)) {
    
                while (randomMonster.life > 0, player.HP > 0) {
                    const attackOrRun = readlineSync.keyIn("Do you want to [a]ttack or [r]un?", { limit: ["a", "r"] })
                    //atack sequec attack()
                    
                    if (attackOrRun === "a") {
                        console.log("You attacked!")
                        attack()
    
                    } else if (attackOrRUn === "r") {
                        run()
                    }
    
                }
    
            }
        }
    }


} else if (startGame === "n") {
    console.log("Player quit game")
} else if (startGame === "p") {
    console.log(player)
}

// while (monsters.length > 0 && player.HP > 0) {
//     walk()
// }

//walking 


//enemy.hp=enempy.hp-player.attack
//attacking, 

function attack() {
    // let anotherRandom = Math.random()

    // if(anotherRandom > 0, anotherRandom < .50){
    //     console.log("Enemy took damage!")
    //     let attackAgain = readlineSync.question("Do you want to attack again?", {limit:["a"]})
    //     if(attackAgain === "a"){
    //         attack()
    //     }
    // } else if (anotherRandom > .51, anotherRandom < 1){
    //     console.log("Attack missed, Enemy killed you...")
    //     isAlive = false
    // }

    // if (Math.floor(Math.random() * 100 < 33)) {
    //     if(player.attack - monsters.life){

    //     }
    //     console.log("Enemy took damage!")
    //     player.inventory.push(monsters.item)
    //     walk()

    // } else if (Math.floor(Math.random() * 100 < 33)) {
    //     console.log("attacked missed, and enemie killed you")
    //     isAlive = false
    // }
}


//running

function run() {

    let runRandomNumber = Math.random()

    if (runRandomNumber > 0, runRandomNumber < .50) {
        console.log("you ran from enemy")
        walk()
    } else if (runRandomNumber > 51, runRandomNumber < 1) {
        console.log("escape negated, enemy killed you")
        isAlive = false
    }
}

// function damageEnemy(monsters){
//     const damage = makeDamageArr(12, 30, 50)
//     const hit = damage[Math.floor(Math.random() * damage.length)]

// monsters.takeDamage(hit)

// if(hit === Math.min(...damage)){
//     console.log(`${monsters} took minor damage of ${hit}`)
// } else if(hit === Math.max(...damage)){
//     console.log(`${monsters} took critical damage of ${hit}`)
// } else {
//     console.log(`${monsters} took ${hit === Math.max(...damage) ? "critical" : hit === Math.min(...damage) ? "minor" : ""} damage of ${hit}`)
// }
// }



// let damage = [20, 35, 50]
// function enemyDamage(){
//     let minor = Math.min(...damage)
//     let critical = Math.max(...damage)

//     if(critical){
//         console.log("you caused some damage!")
//     } else if(minor){
//         console.log("critical hit!")
//     }
// }
// enemyDamage(damage)

//run function
//push items after enemies die
//function for health decreased or attack, using them in conditional states.
//function for health decrease for player by enemy attacking




//////

function walk() {

    // let randomNumber = Math.random()

    while (isAlive) {
        let randomMonster = monsters[Math.floor(Math.random() * monsters.length)]
        // randomNumber > 0, randomNumber < .33
        // randomNumber > .34, randomNumber < .66
        // randomNumber > .67, randomNumber < 1
        if (Math.floor(Math.random() * 100 < 33)) {
            console.log("*running, screams, and brushes sounds*...")

            let askAgain = readlineSync.question("Do you want to [w]alk ?", { limit: ["w"] })

            if (askAgain === "w") {
                walk()
            }

        } else if (Math.floor(Math.random() * 100 < 33)) {
            let attackEnemie = readlineSync.question(`You've come across a ${randomMonster.type} do you want to [a]ttack or [r]un ]`, { limit: ["a", "r"] })

            if (attackEnemie === "a") {
                console.log("You attacked!")
                attack()

            } else if (attackEnemie === "r") {
                run()
            }

        } else if (Math.floor(Math.random() * 100 < 33)) {
            console.log("*Silence*...area cleared.")

            let askAgain = readlineSync.question("Do you want to [w]alk ?", { limit: ["w"] })

            if (askAgain === "w") {
                walk()
            }
        }
    }
}





//Johnny RPG
const readlineSync = require('readline-sync');
const playerName = readlineSync.question("input player one's name ")
//const playerActions = readlineSync.question('You know what you gotta do... Dont be a coward and run.')
//const enemyName = getWildEnemy()
let isPlayerDead = false
let inventory = ''
let player = {
    name: playerName,
    hp: 10,
}
let enemy = {
    name: '',
    hp: 10
}
function getWildEnemy() {
    const arr = [wildEnemyBill = 'Wild Bill', wildEnemyJesseJames = 'Jessie James', wildEnemyTheKid = 'Billy the Kid']
    const enemyIndex = randomNum(arr.length)
    enemy.name = arr[enemyIndex]
        // return arr[enemyIndex]
}
function getInventory(){
    const arr = ['sword', 'cookies', 'stuffed animal']
    const index = randomNum(arr.length)
    inventory += arr[index] + ' '
}
console.log('Hello ' + `${player.name}` + ' welcome to Clossal Adventure type let\'s explore the town ' +
    'It\'s full of mysterious tresure and bandits alike.' + ' you currently have 10 hitpoints.')
letSleep()
while(!isPlayerDead){
    const playerAction = readlineSync.question('press "w" to keep walking or p to display inventory. > ')
    if(playerAction === 'w'){
        walk()
    }
else if(playerAction === 'p'){
    console.log(player.name + " " + player.hp)
    console.log(inventory)
}
}
function letSleep(ms) {
    async function sleep() {
        await sleep(2000)
    }
}
function walk() {
    const value = randomNum(5)
    getWildEnemy()
    if (value >= 4) {
        console.log('You have just ran into ' + `${enemy.name}` + ' good luck!')
        encounterEnemy()
        letSleep()
    } else if (value === 3) {
        console.log(`${enemy.name}` + ' is gaining on you, I suggest you keep walking to get away.')
    } else if (value === 2) {
        console.log('You made it... press "w" to keep walking away from ' + `${enemy.name}` + ' >')
    } else {
        console.log('Nice try getting away... now your mine.')
        encounterEnemy()
    }
    // return value
}
function randomNum(max) {
    return Math.floor(Math.random() * max)
}
function randomNumberInRange(min, max) {
    //max value = 8 Min value = 3
    const adjustedMin = min - 1;
    const adjustedMax = max - 1;
    return Math.floor(Math.random() * (adjustedMax - adjustedMin) + adjustedMin)
}
function wildEnemy() {
    const arr = [wildEnemyBill = 'Wild Bill', wildEnemyJesseJames = 'Jessie James', wildEnemyTheKid = 'Billy the Kid']
    const enemyIndex = randomNum(arr.length)
    return arr[enemyIndex]
}
function encounterEnemy() {
    const playerAction = readlineSync.question('You can either attack or run... However, ' + `${enemy.name}` + ' is known to have a ton of money from' +
        ' robbing banks... and can award you extra hitpoints. If you kill him, you will be hansomly rewarded.' + ' Enter "a" to attack and "r" to run. > ')
    if(playerAction.toLowerCase() === 'a') {
        attack()
    } else {
        run()
    }
}
function attack(){
    const damage = randomNumberInRange(3, 9)
    enemy.hp -= damage
    enemyAttack()
}
function enemyAttack() {
    const damage = randomNumberInRange(3, 9)
    player.hp -= damage
    isDead(damage)
        // return damage
}
function run() {
    random = randomNum(1, 2)
    if (random < 2) {
        console.log(`${enemy.name}` + ' Has caugt you...' + ' Prepare for battle.')
        attack()
    } else {
        console.log('You got lucky ' + `${player.name}` + ' Lets take another stroll.')
    }
}
function isDead(damage, enemyIndex) {
    if (player.hp <= 0) {
        console.log('Your dead!')
        isPlayerDead = true
    } else if (enemy.hp <= 0) {
        player.hp += 1
        console.log('You did it.. you killed ' + `${enemy.name}` + ' that ol\' dirty bastard' + ' Congratulations ' + `${player.name}`)
        getInventory()
    } else {
        const playerAction = readlineSync.question('Your still alive ' + `${enemy.name}` + ' took ' +
            `${damage}` + '' + ' hit points' + ' Do you want to run like a coward or try to kill him???' +
            ' Press "a" to attack' + ' or r to run.')
        if (playerAction.toLowerCase() === 'a'){
            encounterEnemy()
        } else {
            run()
        }
    }
}
