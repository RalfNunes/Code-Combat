// Use a sua nova habilidade "cleave" sempre que possível.

hero.moveXY(23, 23);
while(true) {
    var enemy = hero.findNearestEnemy();
    if (hero.isReady("cleave")) {
        // Cleave!
        hero.cleave(enemy);
    }
    else {
        // Ou (se "cleave" não estiver pronto),  use o ataque normal.
        hero.attack(enemy);
    }
}
