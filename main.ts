namespace SpriteKind {
    export const bluePortal = SpriteKind.create()
    export const redPorta = SpriteKind.create()
    export const redPortal = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`back`)
    playerDir = 1
})
function turnOffRedSwitch () {
    list = tiles.getTilesByType(assets.tile`myTile3`)
    for (let value of list) {
        tiles.setTileAt(value, assets.tile`myTile`)
    }
    list = tiles.getTilesByType(assets.tile`myTile4`)
    for (let value of list) {
        tiles.setTileAt(value, assets.tile`myTile0`)
    }
    list = tiles.getTilesByType(assets.tile`myTile5`)
    for (let value of list) {
        tiles.setTileAt(value, assets.tile`myTile2`)
    }
    for (let value of listSwitchPlatforms) {
        tiles.setTileAt(value, assets.tile`myTile1`)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (redAlive == 0) {
        if (playerDir == 1) {
            projectileRed = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 2 . . . . . . 
                . . . . . . 2 3 1 3 2 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 3 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 3 1 3 2 . . . . . 
                . . . . . . . 3 1 3 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -50)
        }
        if (playerDir == 2) {
            projectileRed = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . 2 2 1 1 1 1 2 . . 
                . . . . 2 2 3 3 1 1 1 1 1 1 . . 
                . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
                . . . . . . 2 2 3 1 1 1 1 2 . . 
                . . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 50, 0)
        }
        if (playerDir == 3) {
            projectileRed = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 2 1 2 . . . . . . 
                . . . . . . . 3 1 3 . . . . . . 
                . . . . . . 2 3 1 3 2 . . . . . 
                . . . . . . 2 1 1 1 2 . . . . . 
                . . . . . . 2 1 1 1 3 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 3 1 1 1 3 . . . . . 
                . . . . . . 2 3 1 3 2 . . . . . 
                . . . . . . . 2 2 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 50)
        }
        if (playerDir == 4) {
            projectileRed = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . 2 1 1 1 1 2 2 . . . . . . . 
                . . 1 1 1 1 1 1 3 3 2 2 . . . . 
                . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
                . . 2 1 1 1 1 3 2 2 . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -50, 0)
        }
        projectileRed.setKind(SpriteKind.redPortal)
        projectileRed.setFlag(SpriteFlag.AutoDestroy, false)
        redAlive = 1
        bPressedOnce = 1
    }
})
function CloseToSwitchOn () {
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile2`) || (mySprite.tileKindAt(TileDirection.Top, sprites.dungeon.greenSwitchUp) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`))) {
        return true
    } else {
        return false
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CloseToSwitchOn() == true) {
        turnOnRedSwitch()
    } else if (CloseToSwitchOff() == true) {
        turnOffRedSwitch()
    } else {
        if (blueAlive == 0) {
            if (playerDir == 1) {
                projectileBlue = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 8 8 8 . . . . . . 
                    . . . . . . 8 9 1 9 8 . . . . . 
                    . . . . . . 9 1 1 1 9 . . . . . 
                    . . . . . . 9 1 1 1 9 . . . . . 
                    . . . . . . 9 1 1 1 9 . . . . . 
                    . . . . . . 8 1 1 1 9 . . . . . 
                    . . . . . . 8 1 1 1 8 . . . . . 
                    . . . . . . 8 9 1 9 8 . . . . . 
                    . . . . . . . 9 1 9 . . . . . . 
                    . . . . . . . 8 1 8 . . . . . . 
                    . . . . . . . 8 1 8 . . . . . . 
                    . . . . . . . 8 1 8 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, -50)
            }
            if (playerDir == 2) {
                projectileBlue = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 8 8 8 8 . . . 
                    . . . . . . . 8 8 1 1 1 1 8 . . 
                    . . . . 8 8 9 9 1 1 1 1 1 1 . . 
                    . . 9 9 9 9 1 1 1 1 1 1 1 1 . . 
                    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                    . . 9 9 8 8 9 1 1 1 1 1 1 1 . . 
                    . . . . . . 8 8 9 1 1 1 1 8 . . 
                    . . . . . . . . . 8 8 8 8 . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 50, 0)
            }
            if (playerDir == 3) {
                projectileBlue = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 8 1 8 . . . . . . 
                    . . . . . . . 8 1 8 . . . . . . 
                    . . . . . . . 8 1 8 . . . . . . 
                    . . . . . . . 9 1 9 . . . . . . 
                    . . . . . . 8 9 1 9 8 . . . . . 
                    . . . . . . 8 1 1 1 8 . . . . . 
                    . . . . . . 8 1 1 1 9 . . . . . 
                    . . . . . . 9 1 1 1 9 . . . . . 
                    . . . . . . 9 1 1 1 9 . . . . . 
                    . . . . . . 9 1 1 1 9 . . . . . 
                    . . . . . . 8 9 1 9 8 . . . . . 
                    . . . . . . . 8 8 8 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, 0, 50)
            }
            if (playerDir == 4) {
                projectileBlue = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . 8 8 8 8 . . . . . . . . . 
                    . . 8 1 1 1 1 8 8 . . . . . . . 
                    . . 1 1 1 1 1 1 9 9 8 8 . . . . 
                    . . 1 1 1 1 1 1 1 1 9 9 9 9 . . 
                    . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                    . . 1 1 1 1 1 1 1 9 8 8 9 9 . . 
                    . . 8 1 1 1 1 9 8 8 . . . . . . 
                    . . . 8 8 8 8 . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, mySprite, -50, 0)
            }
            projectileBlue.setKind(SpriteKind.bluePortal)
            projectileBlue.setFlag(SpriteFlag.AutoDestroy, false)
            blueAlive = 1
            aPressedOnce = 1
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`left`)
    playerDir = 4
})
sprites.onDestroyed(SpriteKind.redPortal, function (sprite) {
    if (rThrown == 1) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(redPortalCol, redPortalRow), sprites.dungeon.floorLight2)) {
            tiles.setTileAt(tiles.getTileLocation(redPortalCol, redPortalRow), sprites.dungeon.floorLight2)
        }
    }
    redPortalCol = projectileRed.tilemapLocation().column
    redPortalRow = projectileRed.tilemapLocation().row
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(redPortalCol, redPortalRow), sprites.dungeon.floorLight2)) {
        tiles.setTileAt(tiles.getTileLocation(redPortalCol, redPortalRow), sprites.dungeon.collectibleRedCrystal)
        rThrown = 1
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(redPortalCol, redPortalRow), sprites.dungeon.collectibleBlueCrystal)) {
        tiles.setTileAt(tiles.getTileLocation(redPortalCol, redPortalRow), sprites.dungeon.collectibleRedCrystal)
        bThrown = 0
        rThrown = 1
    }
    redAlive = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    scene.cameraShake(4, 500)
    levelUpdate()
    mySprite.setVelocity(0, 0)
})
sprites.onDestroyed(SpriteKind.bluePortal, function (sprite) {
    if (bThrown == 1) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(bluePortalCol, bluePortalRow), sprites.dungeon.floorLight2)) {
            console.log(bThrown)
            tiles.setTileAt(tiles.getTileLocation(bluePortalCol, bluePortalRow), sprites.dungeon.floorLight2)
        }
    }
    bluePortalCol = projectileBlue.tilemapLocation().column
    bluePortalRow = projectileBlue.tilemapLocation().row
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(bluePortalCol, bluePortalRow), sprites.dungeon.floorLight2)) {
        tiles.setTileAt(tiles.getTileLocation(bluePortalCol, bluePortalRow), sprites.dungeon.collectibleBlueCrystal)
        bThrown = 1
    }
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(bluePortalCol, bluePortalRow), sprites.dungeon.collectibleRedCrystal)) {
        tiles.setTileAt(tiles.getTileLocation(bluePortalCol, bluePortalRow), sprites.dungeon.collectibleBlueCrystal)
        bThrown = 1
        rThrown = 0
    }
    blueAlive = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    if (rThrown == 1 && bThrown == 1) {
        tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`right`)
    playerDir = 2
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterEast0, function (sprite, location) {
    mySprite.vx = -10
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterWest1, function (sprite, location) {
    mySprite.vx = 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`front`)
    playerDir = 3
})
function CloseToSwitchOff () {
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile4`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile5`) || (mySprite.tileKindAt(TileDirection.Top, sprites.dungeon.greenSwitchUp) || mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile`))) {
        return true
    } else {
        return false
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile9, function (sprite, location) {
    scene.cameraShake(4, 500)
    levelUpdate()
    mySprite.setVelocity(0, 0)
})
function turnOnRedSwitch () {
    list = tiles.getTilesByType(assets.tile`myTile`)
    for (let value of list) {
        tiles.setTileAt(value, assets.tile`myTile3`)
    }
    list = tiles.getTilesByType(assets.tile`myTile0`)
    for (let value of list) {
        tiles.setTileAt(value, assets.tile`myTile4`)
    }
    list = tiles.getTilesByType(assets.tile`myTile2`)
    for (let value of list) {
        tiles.setTileAt(value, assets.tile`myTile5`)
    }
    listSwitchPlatforms = tiles.getTilesByType(assets.tile`myTile1`)
    for (let value of listSwitchPlatforms) {
        tiles.setTileAt(value, sprites.dungeon.floorLight2)
    }
}
function levelUpdate () {
    scene.setBackgroundColor(13)
    tiles.setCurrentTilemap(level[currentLevel])
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight1)
    tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
    tiles.setTileAt(tiles.getTileLocation(0, 1), assets.tile`transparency16`)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    currentLevel += 1
    levelUpdate()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile14`, function (sprite, location) {
    if (currentLevel == 0) {
        game.showLongText("Red = Exit portal      Blue = Exit portal", DialogLayout.Center)
    }
})
let bluePortalRow = 0
let bluePortalCol = 0
let redPortalRow = 0
let redPortalCol = 0
let projectileBlue: Sprite = null
let projectileRed: Sprite = null
let listSwitchPlatforms: tiles.Location[] = []
let list: tiles.Location[] = []
let redAlive = 0
let blueAlive = 0
let playerDir = 0
let bPressedOnce = 0
let aPressedOnce = 0
let bThrown = 0
let rThrown = 0
let mySprite: Sprite = null
let currentLevel = 0
let level: tiles.TileMapData[] = []
let loaded = 0
level = [tilemap`level1`, tilemap`level2`, tilemap`level2`]
currentLevel = 0
scene.setBackgroundColor(13)
tiles.setCurrentTilemap(level[currentLevel])
mySprite = sprites.create(assets.image`front`, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight1)
controller.moveSprite(mySprite, 50, 50)
scene.cameraFollowSprite(mySprite)
tiles.setTileAt(tiles.getTileLocation(0, 0), assets.tile`transparency16`)
tiles.setTileAt(tiles.getTileLocation(0, 1), assets.tile`transparency16`)
rThrown = 0
bThrown = 0
aPressedOnce = 0
bPressedOnce = 0
playerDir = 3
blueAlive = 0
redAlive = 0
game.splash("Welcome to Portal Maze!")
game.showLongText("Use A and B to throw portals you can use to overcome obstacles and beat the maze.", DialogLayout.Center)
loaded = 1
game.onUpdate(function () {
	
})
