var words = ['你好！你好嗎？', 'Tere! Kuidas sul läheb?', 'مرحبا! كيف حالك؟!','Salut! Comment allez-vous?'];
var i = 0;
var text = "This text changes";
function _getChangedText() {
        i = (i + 1) % words.length;
        return words[i];
}
function _changeText() {
  var txt = _getChangedText();

    var d = document.getElementById("changer")
    d.className = "fadeOut";
    setTimeout(function(){
     d.className = "";
    document.getElementById("changer").innerHTML = txt;
}, 2000);
}
setInterval("_changeText()", 4000); 