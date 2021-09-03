kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],
})

loadSprite('brick', 'images/brick.png');
/*loadSprite('coin', 'https://imgur.com/wbKxhcd');
loadSprite('evil-shroon', 'https://imgur.com/KPO3fR9');
loadSprite('block', 'https://imgur.com/bdrLpi6');
loadSprite('mario', 'https://imgur.com/Wb1qfhK');
loadSprite('shroon', 'https://imgur.com/0wMd92p');
loadSprite('surprise', 'https://imgur.com/gesQ1KP');
loadSprite('unbox-block', 'https://imgur.com/bdrLpi6');
loadSprite('pipe-left', 'https://imgur.com/0wMd92p');
loadSprite('pipe-right', 'https://imgur.com/hj2GK4n');
loadSprite('pipe-botton-left', 'https://imgur.com/c1cYSbt');
loadSprite('pipe-botton-right', 'https://imgur.com/nqQ79eI');

*/

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj');

    const map = [
        '                                              ',
        '                                              ',
        '                                              ',
        '                                              ',
        '                                              ',
        '                                              ',
        '                                              ',
        '                                              ',
        '                                              ',
        '                                              ',
        '                                              ',
        '=============================================='
    ]

    const levelconf = {
        with: 20,
        height: 20,
        '=': [sprite('brick', solid())]
        }
    
    const gameLevel = addLevel(map, levelconf)
})

start("game");