var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            // var replacedText = handleText(node);
            handleText(node);
            // if (replacedText !== text) {
            //     element.replaceChild(document.createTextNode(replacedText), node);
            // }
        }
    }
}

function handleText(textNode)
{
    var text = textNode.nodeValue;

    text = text.replace(/hold up/gi, 'they dont love you like I love you. ');
    text = text.replace(/cause you/gi, 'you, you, you and me could move a mountain. ');
    text = text.replace(/sorry/gi, ', I aint sorry. ');
    text = text.replace(/\bfinal warning\b/gi, 'you know I give you life. If you try this shit again. You gon lose your wife. ');
    text = text.replace(/Don't Hurt Yourself/gi, 'When you hurt me, you hurt yourself. ');
    text = text.replace(/lessons/gi, 'my daddy said shoot. ');
    text = text.replace(/formation/gi, 'always stay gracious, best revenge is your paper. ');

    textNode.nodeValue = text;
}

