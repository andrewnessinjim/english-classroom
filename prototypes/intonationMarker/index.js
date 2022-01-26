const message = "Hello World Hello Doggy"
function draw() {
    const stage = new createjs.Stage("canvas");
    let x = 0;
    let textY = 100;
    let intonationY = 50;

    const characterData = []
    for(let index=0; index<message.length; index ++) {  
        let char = new createjs.Text(message[index], "48px Arial");
        char.x = x;
        char.y = textY;
        char.textBaseline = "alphabetic";

        stage.addChild(char);

        characterData.push({char: message[index], x})
        x = x + char.getMeasuredWidth();
    }

    let beginWord = true;
    for(charData of characterData) {
        if(beginWord) {
            let circle = new createjs.Shape();
            circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 5);
            circle.x = charData.x + 5;
            circle.y = intonationY;
            stage.addChild(circle);
            beginWord = false;

            circle.addEventListener("click", e => {
                console.log(e.stageX, e.stageY);
            })
        }
        if(/\s/.test(charData.char)) beginWord = true;
    }
    stage.update();
    console.log(characterData);
}