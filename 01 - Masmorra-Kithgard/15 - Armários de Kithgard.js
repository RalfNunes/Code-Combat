// Talvez tenha algo por perto para te ajudar!

// Primeiro, mova-se para o Cupboard (Armário).
hero.moveUp();
hero.moveRight(2);
hero.moveDown(2);
// Em seguida, ataque o "Cupboard"  dentro de um loop while-true.
while(true) {
    hero.attack("Cupboard");
}