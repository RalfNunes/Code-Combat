// Fique no meio e defenda!

while(true) {
    var enemy = hero.findNearestEnemy();
    if (enemy) {
        // Ataque o inimigo...
        hero.attack(enemy);
    }
    else {
        // ... ou retorne à sua posição de defesa.
        hero.moveXY(40, 34);
    }
}
