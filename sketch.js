var bg, bgImg;
var player, shooterImg, shooter_shooting;
var zumbi, zumbiImage;
var heart1, heart2, heart3;
var heart1Image, heart2Image, heart3Image;
var zumbiGroup;


function preload() {

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zumbiImage = loadImage("assets/zumbi.png")
  heart1Image = loadImage("assets/heart_1.png")
  heart2Image = loadImage("assets/heart_2.png")
  heart3Image = loadImage("assets/heart_3.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {


  createCanvas(windowWidth, windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth / 2 - 20, displayHeight / 2 - 40, 20, 20)
  bg.addImage(bgImg)
  bg.scale = 1.1


  //criando o sprite do jogador
  player = createSprite(displayWidth - 1150, displayHeight - 300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle", 0, 0, 300, 300)


}

function draw() {
  background(0);




  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  if (keyDown("UP_ARROW") || touches.length > 0) {
    player.y = player.y - 30
  }
  if (keyDown("DOWN_ARROW") || touches.length > 0) {
    player.y = player.y + 30
  }


  //solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
  if (keyWentDown("space")) {

    player.addImage(shooter_shooting)

  }

  //o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
  else if (keyWentUp("space")) {
    player.addImage(shooterImg)
  }

  drawSprites();
   
  createZumbi()

}

function createZumbi() {
  if (frameCount%120 === 0) {
    zumbi = createSprite(random(700, 1200), random(400, 800));
    zumbi.addImage(zumbiImage);
    zumbi.scale = 0.3;
    zumbi.velocityX = -3;
    zumbi.lifetime = 300;
  } 
    }
