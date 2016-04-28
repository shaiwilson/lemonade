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

    text = text.replace(/hold up/gi, 'they dont love you like I love you');
    text = text.replace(/formation/gi, 'HOLD UP');
    text = text.replace(/world tour/gi, 'HOLD UP');
    text = text.replace(/\blemonade\b/gi, 'HOLD UP');
    text = text.replace(/Formation World Tour/gi, 'HOLD UP HOLD UP');
    text = text.replace(/formation world tour/gi, 'HOLD UP');
    text = text.replace(/Beyoncé formation tour/gi, 'HOLD UP');

    textNode.nodeValue = text;
}

