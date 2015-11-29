new function(window, document, CodeMirror, Clipboard) {


    var sl = function(selector) {
        return document.getElementById(selector)
    }


    var editor = CodeMirror.fromTextArea(sl("code-panel"), {
        // value: value,
        lineNumbers: true,
        mode: "text/html",
        keyMap: "sublime",
        // autoCloseBrackets: true,
        // matchBrackets: true,
        // showCursorWhenSelecting: true,
        // tabSize: 2,
        theme: "monokai"
    });


    function doHighLight() {
        CodeMirror.runMode(
            editor.getValue(),
            "text/html",
            sl("output-panel"))
    }
    editor.on('change', doHighLight)
    doHighLight()


    new Clipboard('#btn-copy')

    $('select[data-provide="select2"]').select2()

}(window, document, CodeMirror, Clipboard)
