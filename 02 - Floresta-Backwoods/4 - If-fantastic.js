// Derrote os ogros de dentro de seu próprio acampamento!

while(true) {
    var enemy = hero.findNearestEnemy();
    // Use uma declaração if para verificar se existe um inimigo:
    if(enemy)
        // Ataque se o inimigo existir: 
       hero.attack(enemy);
}
