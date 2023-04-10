// Use um loop while-true para mover-se e atacar.

while(true) {
 hero.moveRight();
 hero.moveUp();
 var enemy = hero.findNearestEnemy();
 hero.attack(enemy);
 hero.moveRight();
 hero.moveDown(2);
 hero.moveUp();
}