// Explore a floresta, mas fique atento.
// Estes cubículos da floresta podem esconder ogros.

hero.moveXY(19, 33);
var enemy = hero.findNearestEnemy();
// A declaração if irá veificar se uma variável possui um ogro.
if(enemy) {
    hero.attack(enemy);
    hero.attack(enemy);
}
hero.moveXY(49, 51);
enemy = hero.findNearestEnemy();
if(enemy) {
    // Ataque o inimigo aqui:
    hero.attack(enemy);
    hero.attack(enemy);
}

hero.moveXY(58, 14);
enemy = hero.findNearestEnemy();
// Use uma declaração if para verificar se um inimigo existe:
if(enemy) {
    // Se o inimigo existir, ataque-o:
    hero.attack(enemy);
    hero.attack(enemy);
}