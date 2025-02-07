<!-- cSpell:ignore ESRB Gameplay minijuegos minimalista desbloqueables -->

# 📜 **Documento de Diseño de Juego (GDD)**

## <!-- https://en.namu.wiki/w/Geometry%20Dash/%EC%98%A4%EB%B8%8C%EC%A0%9D%ED%8A%B8%20%EC%9D%BC%EB%9E%8C -->

<p align="center">
  <img src="resources/icon.png" alt="GreenOps Logo" width="200"/>
</p>
<p align="center">
  <img src="resources/logo.png" alt="GreenOps Logo" width="800"/>
</p>

<!-- ![icon](resources/icon.png)
![logo](resources/logo.png) -->

## 📌 **1. Portada**

**🎮 Nombre del Juego:** _Neo Dash_  
**🎭 Género del Juego:** _Plataformas, Ritmo_  
**👤 Autor:** _Adrian Camilo Tuta_  
**📧 Contacto:** _camilotuta2004@gmail.com_  
**🖥️ Plataformas Objetivo:** _PC Web_  
**👥 Audiencia Objetivo:** _Jóvenes entre 10 y 25 años_  
**📅 Posible Fecha de Lanzamiento:** _13/04/2025_  
**🔞 ESRB Estimado:** _E (Everyone)_

---

## 📖 **2. Historia y Gameplay**

### 🎭 Historia

_Neo Dash no tiene una historia definida, el objetivo es superar niveles saltando y esquivando obstáculos sincronizados con la música._

### 🎮 Gameplay

_El jugador controla un cubo que avanza automáticamente a través de niveles llenos de obstáculos, sincronizados con la música. Solo puede saltar al tocar la pantalla o presionar un botón. Hay diferentes modos de juego, como el modo cubo y de nave, que cambian las mecánicas de movimiento._

![Gameplay](resources/gameplay.gif)

---

## 🔄 **3. Flujo del Juego (Game Flow)**

- 📈 **Progresión del Personaje:** _No hay progresión de personaje, solo habilidades del jugador._
- 🎯 **Dificultad Progresiva:** _Los niveles son cada vez más desafiantes y requieren reflejos más precisos._

![dificultades](image.png)

- 🔄 **Sistemas de Juego:** _Sistema de niveles, logros y recompensas._

<p >
  <img src="resources/coins/coinGold.png" alt="GreenOps Logo" width="400"/>
  <img  src="resources/coins/coin.png" alt="GreenOps Logo" width="250"/>
</p>

<!-- ![coinGold](resources/coins/coinGold.png) 
![coin](resources/coins/coin.png) -->

- 🏆 **Recompensas:** _Íconos y colores personalizados._
![cubos](/resources/cubes/cubos.png)

---

## 🕹️ **4. Personajes y Controles**

### 👤 Personaje Principal

🖌️ **Diseño:** _Un cubo personalizable con diferentes apariencias._  
🎮 **Controles:** _Los botones establecidos para saltar con espacio, flecha hacia arriba y click izquierdo del mouse para saltar (o mantener presionado para volar con la nave)._  
⚡ **Movimientos Únicos:** _Saltar, cambiar de gravedad, volar en nave, rebotar en trampolines._  
🕹️ **Esquema de Controles:**

```markdown
[Un solo botón para interactuar con el juego]
```

<p >
  <img src="resources/controls/leftClick.png" alt="GreenOps Logo" width="150"/>
  
  <img src="resources/controls/teclaUp.png" alt="GreenOps Logo" width="200"/>

  <img src="resources/controls/spaceBar.png" alt="GreenOps Logo" width="300"/>
</p>

<!-- ![left-click](resources/controls/leftClick.png)![up](resources/controls/teclaUp.png) ![space](resources/controls/spaceBar.png) -->

---

## 🎭 **5. Conceptos del Gameplay y Características de Plataforma**

- 📜 **Género:** _Plataformas, Ritmo._
- 🎯 **Estructura del Juego:** _Niveles predefinidos._
- 🎲 **Minijuegos:** _No tiene minijuegos._
- 🛠️ **Características Específicas:** _Sincronización con la música, editor de niveles._

---

## 🌍 **6. Mundo del Juego**

🌎 **Descripción de los Mundos:** _No hay mundos definidos, cada nivel tiene su propio diseño visual._  
🎨 **Arte Conceptual:**

```markdown
[Colores vibrantes y efectos de neón]
```

![Paleta de colores](resources/colors.png)
📍 **Diagrama de Navegación:**

```markdown
[Avance lineal en cada nivel sin rutas alternas]
```

---

## 🖥️ **7. Interfaz**

📌 **Navegación del Jugador:** _Menú principal con acceso a niveles, tienda, opciones y editor._  
🎭 **Sensaciones y Estilo:** _Minimalista y colorido con animaciones dinámicas._  
📊 **Flujo de Interfaz:**

```markdown
[Menú principal → Selección de nivel → Juego → Resultados]
```

---

## ⚙️ **8. Mecánicas y Power-Ups**

🔄 **Mecánicas:** _Saltar, cambiar de gravedad, volar en nave._  

<p align="center">
  <img src="resources/cubes/player.png" alt="GreenOps Logo" width="150"/>
  <img src="resources/cubes/wave.png" alt="GreenOps Logo" width="200"/>
</p>

<!-- ![cube](resources/cubes/player.png)
![nave](resources/cubes/wave.png) -->
⚡ **Power-Ups:** _Portales de cambio de gravedad, aceleradores, plataformas de salto._

<p align="center">
  <img src="resources/portals/gravityDown.png" alt="GreenOps Logo" width="150"/>
  <img src="resources/portals/gravityUp.png" alt="GreenOps Logo" width="150"/>
</p>

<p align="center">
  <img src="resources/portals/portalCube.png" alt="GreenOps Logo" width="150"/>
  <img src="resources/portals/portalWave.png" alt="GreenOps Logo" width="150"/>
</p>

<p align="center">
  <img src="resources/rings/blueJumpRing.png" alt="GreenOps Logo" width="150"/>
  <img src="resources/rings/yellowJumpRing.png" alt="GreenOps Logo" width="150"/>
</p>

<p align="center">
  <img src="resources/stools/blueStool.png" alt="GreenOps Logo" width="150"/>
  <img src="resources/stools/yellowStool.png" alt="GreenOps Logo" width="150"/>
</p>

<!-- ![gravityDown](resources/portals/gravityDown.png) ![gravityUp](resources/portals/gravityUp.png) -->

<!-- ![portalCube](resources/portals/portalCube.png)![portalWave](resources/portals/portalWave.png) -->

<!-- ![blueJumpRing](resources/rings/blueJumpRing.png)![yellowJumpRing](resources/rings/yellowJumpRing.png) -->

<!-- ![blueStool](resources/stools/blueStool.png)![yellowStool](resources/stools/yellowStool.png) -->

---

## 👾 **9. Enemigos y Jefes**

### 👿 Enemigos

_No hay enemigos directos, los obstáculos son los principales desafíos._  

<p align="center">
  <img src="resources/obstacles/obstacle.png" alt="Obstacle 1" width="100"/>
  <img src="resources/obstacles/obstacle4.png" alt="Obstacle 4" width="100"/>
  <img src="resources/obstacles/obstacle3.png" alt="Obstacle 3" width="100"/>
  <img src="resources/obstacles/obstacle2.png" alt="Obstacle 2" width="100"/>

</p>
<p align="center">>
  <img src="resources/obstacles/obstacleBall.png" alt="Obstacle Ball" width="250"/>
  <img src="resources/obstacles/obstacleRing.png" alt="Obstacle Ring" width="250"/>
</p>

<!-- ![obstacle](resources/obstacles/obstacle.png) ![obstacle4](resources/obstacles/obstacle4.png) ![obstacle3](resources/obstacles/obstacle3.png) ![obstacle2](resources/obstacles/obstacle2.png)
![obstacleBall](resources/obstacles/obstacleBall.png) ![obstacleRing](resources/obstacles/obstacleRing.png) -->

### 👹 Jefes

_No hay jefes, pero algunos niveles presentan secciones extremadamente difíciles._

---

## 🎬 **10.: Cinemáticas, Material Bonus y Competencia**

🎥 **Cinemáticas:** _No tiene cinemáticas._  
🎨 **Material Bonus:** _Iconos desbloqueables, colores personalizados, efectos._  
🎮 **Competencia:** _Super Meat Boy, The Impossible Game, Bit.Trip Runner._
