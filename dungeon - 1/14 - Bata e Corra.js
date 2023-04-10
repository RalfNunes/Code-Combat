// Você pode escrever códigos antes de um loop.
hero.moveRight();
// Quebre o "Chest" (baú) antes de usar o loop para escapar do labirinto!
hero.attack("Chest");
// Return back back into the main hallway.
hero.moveDown();

while(true) {
    // Mova-se 3 vezes.
    hero.moveRight(3);
    // Move 3 times more.
    hero.moveDown(3);
    
}