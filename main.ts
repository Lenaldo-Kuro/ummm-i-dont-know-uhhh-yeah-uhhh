controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . 
        . . 5 5 5 . . 
        . . 5 5 5 . . 
        . . 5 5 5 . . 
        . 5 5 5 5 5 . 
        . . . 5 . 5 . 
        . . . 5 . 5 . 
        . 5 5 5 . . . 
        . 5 . 5 . . . 
        . 5 . 5 . . . 
        . . . 5 . . . 
        . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . 
        . . 5 5 5 . . 
        . . 5 5 5 . . 
        . . 5 5 5 . . 
        . 5 5 5 5 5 . 
        . 5 . 5 . . . 
        . 5 . 5 . . . 
        . . . 5 5 5 . 
        . . . 5 . 5 . 
        . . . 5 . 5 . 
        . . . 5 . . . 
        . . . . . . . 
        `)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . 
    . . 5 5 5 . . 
    . . 5 5 5 . . 
    . . 5 5 5 . . 
    . 5 5 5 5 5 . 
    . 5 . 5 . . . 
    . 5 . 5 . . . 
    . . . 5 5 5 . 
    . . . 5 . 5 . 
    . . . 5 . 5 . 
    . . . 5 . . . 
    . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
