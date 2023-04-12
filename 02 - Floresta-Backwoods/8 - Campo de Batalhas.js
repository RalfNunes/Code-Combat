// Derrote o herói inimigo em um duelo!

while(true) {
    // Encontre e ataque o inimigo dentro de um laço.
    // Quando tiver terminado, envie para escada multiplayer!
    var enemy = hero.findNearestEnemy();
    if(hero.isReady("cleave")) {
        hero.cleave(enemy);
        }
    else {
        hero.attack(enemy);
    }
}
