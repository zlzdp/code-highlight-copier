new function(window, document, CodeMirror, Clipboard) {

    var lang = 'text/html'
    var editor = CodeMirror.fromTextArea($("#code-panel")[0], {
        // value: value,
        lineNumbers: true,
        mode: "text/html",
        keyMap: "sublime",
        theme: "monokai"
    });


    function doHighLight() {
        CodeMirror.runMode(
            editor.getValue(),
            lang,
            $("#output-panel")[0])
    }
    editor.on('change', doHighLight)
    doHighLight()


    new Clipboard('#btn-copy')

    $('select[data-provide="select2"]')
        .change(function() {
            lang = $(this).val()
            doHighLight()
        })
        .select2()

    // 可能是 代码编辑器也监听了按钮，导致了监听键盘事件不正常执行
    $('body,#code-panel').bind('keydown', 'Alt+l', function (e) {
        // console.log(1)
    })

}(window, document, CodeMirror, Clipboard)
