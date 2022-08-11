function greeting() {
    let username = 'Brian'

    function diplayUsername() {
        return `Hello ${username}`
    }

    return diplayUsername
}

const g = greeting();
console.log(g)
console.log(g())