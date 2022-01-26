const message = "I don't think you believe that. You think she's innocent too. You just don't want to pursue it.";
const wordsData = [];
[...message.split(" ")].forEach(word => {
    wordsData.push({word})
});

let wordX = 0;
let textY = 80;

const INTONATION_INDICATORS_LOW_Y = 50;
const INTONATION_INDICATORS_HIGH_Y = 20;
const ControlPointType = Object.freeze({
    BEGIN_LOW:1,
    BEGIN_HIGH:2,
    END_LOW:3,
    END_HIGH: 4});

let selectedIntonationControlPointX;
let selectedIntonationControlPointY;
let selectedIntonationControlPoints = [];

let isMarkingIntonation = false;
let tempIntonationMarker;

let stage;
function draw() {
    stage = new createjs.Stage("canvas");
    stage.enableMouseOver();
    for(let index = 0; index < wordsData.length; index++) {
        let wordDisp = new createjs.Text(wordsData[index].word, "24px Arial");
        wordDisp.x = wordX;
        wordDisp.y = textY;
        wordDisp.textBaseline = "alphabetic";

        stage.addChild(wordDisp);
        wordsData[index].beginX = wordX;
        wordX = wordX + wordDisp.getMeasuredWidth();
        wordsData[index].endX = wordX;

        let spaceDisp = new createjs.Text(" ", "32px Arial");
        spaceDisp.x = wordX;
        spaceDisp.y = textY;
        spaceDisp.textBaseline = "alphabetic";
        wordX = wordX + spaceDisp.getMeasuredWidth();
    }

    for(let index = 0; index < wordsData.length; index++) {
        let beginLowIndicatorDisp = drawIntonationControlPoint("#ddd", wordsData[index].beginX, INTONATION_INDICATORS_LOW_Y, 5);
        wordsData[index].beginLowIndicatorDisp = beginLowIndicatorDisp;
        stage.addChild(beginLowIndicatorDisp);
        attachActivationListeners(beginLowIndicatorDisp, ControlPointType.BEGIN_LOW, index, 5);

        let beginHighIndicatorDisp = drawIntonationControlPoint("#ddd", wordsData[index].beginX, INTONATION_INDICATORS_HIGH_Y, 5);
        wordsData[index].beginHighIndicatorDisp = beginHighIndicatorDisp;
        stage.addChild(beginHighIndicatorDisp);
        attachActivationListeners(beginHighIndicatorDisp, ControlPointType.BEGIN_HIGH, index, 5);
        
        let endLowIndicatorDisp = drawIntonationControlPoint("#ddd", wordsData[index].endX, INTONATION_INDICATORS_LOW_Y, -5);
        wordsData[index].endLowIndicatorDisp = endLowIndicatorDisp;
        stage.addChild(endLowIndicatorDisp);
        endLowIndicatorDisp.visible = false;
        attachActivationListeners(endLowIndicatorDisp, ControlPointType.END_LOW, index, -5);

        let endHighIndicatorDisp = drawIntonationControlPoint("#ddd", wordsData[index].endX, INTONATION_INDICATORS_HIGH_Y, -5);
        wordsData[index].endHighIndicatorDisp = endHighIndicatorDisp;
        stage.addChild(endHighIndicatorDisp);
        endHighIndicatorDisp.visible = false;
        attachActivationListeners(endHighIndicatorDisp, ControlPointType.END_HIGH, index, -5);
    }
    stage.update();

    stage.addEventListener("stagemousemove", e => {
        if(isMarkingIntonation) {
            stage.removeChild(tempIntonationMarker);
            tempIntonationMarker = new createjs.Shape();

            if(isMarkingDecreasingIntonation) {
                tempIntonationMarker.graphics
                    .beginFill("grey")
                    .moveTo(selectedIntonationControlPointX, selectedIntonationControlPointY)
                    .lineTo(e.stageX, e.stageY)
                    .lineTo(selectedIntonationControlPointX, e.stageY)
                    .lineTo(selectedIntonationControlPointX, selectedIntonationControlPointY)
            } else {
                tempIntonationMarker.graphics
                    .beginFill("grey")
                    .moveTo(selectedIntonationControlPointX, selectedIntonationControlPointY)
                    .lineTo(e.stageX, e.stageY)
                    .lineTo(e.stageX, selectedIntonationControlPointY)
                    .lineTo(selectedIntonationControlPointX, selectedIntonationControlPointY)
            }

            stage.addChild(tempIntonationMarker);
            stage.update();

        }
    });
}

function drawIntonationControlPoint(color, x, y, xOffset) {
    let endTopIndicatorDisp = new createjs.Shape();
    endTopIndicatorDisp.graphics.beginFill(color).drawCircle(xOffset,0,5);
    endTopIndicatorDisp.x = x;
    endTopIndicatorDisp.y = y;

    return endTopIndicatorDisp;
}

function attachActivationListeners(indicatorDisp, controlPointType, index, xOffset) {
    indicatorDisp.addEventListener("mouseover", e => {
        activateIntonationControlPoint(index, controlPointType, xOffset);
    });

    indicatorDisp.addEventListener("mouseout", e => {
        if(!selectedIntonationControlPoints.includes(indicatorDisp)) {
            deactivateIntonationControlPoint(index, controlPointType, xOffset);
        }
    });

    indicatorDisp.addEventListener("click", e => {
        activateIntonationControlPoint(index, controlPointType, xOffset);
        selectedIntonationControlPoints.push(indicatorDisp);
        if(!isMarkingIntonation) {
            isMarkingIntonation = true;
            selectedIntonationControlPointX = indicatorDisp.x + xOffset;
            selectedIntonationControlPointY = indicatorDisp.y;
            if(controlPointType == ControlPointType.BEGIN_HIGH) {
                isMarkingDecreasingIntonation = true;
                hideBeginLowMarkers();
                hideBeginHighMarkers(indicatorDisp);
                showEndLowMarkers();
            } else { //BEGIN_LOW
                isMarkingDecreasingIntonation = false;
                hideBeginLowMarkers(indicatorDisp);
                hideBeginHighMarkers();
                showEndHighMarkers();
            }
        } else {
            selectedIntonationControlPoint = indicatorDisp;
            stage.removeChild(tempIntonationMarker);
            isMarkingIntonation = false;
            let permanentIntonationMarker = new createjs.Shape();
            if (isMarkingDecreasingIntonation) {
                permanentIntonationMarker.graphics
                    .beginFill("DeepSkyBlue")
                    .moveTo(selectedIntonationControlPointX, selectedIntonationControlPointY)
                    .lineTo(indicatorDisp.x + xOffset, indicatorDisp.y)
                    .lineTo(selectedIntonationControlPointX, e.stageY)
                    .lineTo(selectedIntonationControlPointX, selectedIntonationControlPointY)
            } else {
                permanentIntonationMarker.graphics
                    .beginFill("DeepSkyBlue")
                    .moveTo(selectedIntonationControlPointX, selectedIntonationControlPointY)
                    .lineTo(indicatorDisp.x + xOffset, indicatorDisp.y)
                    .lineTo(indicatorDisp.x + xOffset, selectedIntonationControlPointY)
                    .lineTo(selectedIntonationControlPointX, selectedIntonationControlPointY)
            }

            stage.addChild(permanentIntonationMarker);

            showBeginLowMarkers();
            showBeginHighMarkers();
            hideEndLowMarkers();
            hideEndHighMarkers();
            
        }
        stage.update();
    });
}

function hideEndLowMarkers() {
    wordsData.forEach(wordData => !selectedIntonationControlPoints.includes(wordData.endLowIndicatorDisp) ? wordData.endLowIndicatorDisp.visible = false : "");
}

function hideEndHighMarkers() {
    wordsData.forEach(wordData => !selectedIntonationControlPoints.includes(wordData.endHighIndicatorDisp) ? wordData.endHighIndicatorDisp.visible = false : "");
}

function showEndHighMarkers() {
    wordsData.forEach(wordData => wordData.endHighIndicatorDisp.visible = true);
}

function showBeginLowMarkers() {
    wordsData.forEach(wordData => wordData.beginLowIndicatorDisp.visible = true);
}

function showBeginHighMarkers() {
    wordsData.forEach(wordData => wordData.beginHighIndicatorDisp.visible = true);
}

function hideBeginHighMarkers(excludeMarker) {
    wordsData.forEach(wordData => wordData.beginHighIndicatorDisp != excludeMarker ? wordData.beginHighIndicatorDisp.visible = false : "");
}

function hideBeginLowMarkers(excludeMarker) {
    wordsData.forEach(wordData => wordData.beginLowIndicatorDisp != excludeMarker ? wordData.beginLowIndicatorDisp.visible = false : "");
}

function showEndLowMarkers() {
    wordsData.forEach(wordData => wordData.endLowIndicatorDisp.visible = true);
}

function activateIntonationControlPoint(index, controlPointType, xOffset) {
    wordsData[index][mapToControlPointKey(controlPointType)].graphics.clear();
    wordsData[index][mapToControlPointKey(controlPointType)].graphics.beginFill("DeepSkyBlue").drawCircle(xOffset,0,5);
    stage.update();
}

function deactivateIntonationControlPoint(index, controlPointType, xOffset) {
    wordsData[index][mapToControlPointKey(controlPointType)].graphics.clear();
    wordsData[index][mapToControlPointKey(controlPointType)].graphics.beginFill("#ddd").drawCircle(xOffset,0,5);
    stage.update();
}

function mapToControlPointKey(controlPointType) {
    switch(controlPointType) {
        case ControlPointType.BEGIN_LOW:
            return "beginLowIndicatorDisp";
        case ControlPointType.BEGIN_HIGH:
            return "beginHighIndicatorDisp";
        case ControlPointType.END_LOW:
            return "endLowIndicatorDisp";
        case ControlPointType.END_HIGH:
            return "endHighIndicatorDisp";
    }
}