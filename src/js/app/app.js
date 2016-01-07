! function(window, document, CodeMirror, Clipboard) {

    var lang = Cookies.get().lang || 'text/html',
        langSelect = $('select[data-provide="select2"]'),
        editor = CodeMirror.fromTextArea($("#code-panel")[0], {
            // value: value,
            lineNumbers: true,
            mode: lang,
            keyMap: "sublime",
            theme: "monokai"
        });


    function doHighLight() {
        CodeMirror.runMode(
            editor.getValue(),
            lang,
            $("#output-panel")[0])
    }

    editor.on('change', doHighLight);
    doHighLight();


    Clipboard && new Clipboard('#btn-copy');

    langSelect.change(function() {
        var val = $(this).val();
        if (!val) {
            return;
        }
        lang = val;
        editor.setOption("mode", lang);
        doHighLight();

        // save setting
        Cookies.set('lang', lang, {
            expires: 365
        });

        setTimeout(function() {
            editor.focus();
            editor.execCommand('goDocEnd');
        }, 15);

    });

    langSelect.select2({
        width: '7em'
    });

    // restore setting
    Cookies.get().lang && langSelect.val(lang).trigger('change');

    // 可能是代码编辑器也监听了按钮，导致监听键盘事件不正常执行
    // document 与 editor 分开监听事件
    $(document).bind('keyup', 'Alt+l', function(e) {
            // e.isDefaultPrevented()
            langSelect.select2('open');
        })
        .bind('keyup', 'Alt+c', function(e) {
            $('#btn-copy').click();
        })
        .bind('keyup', 'Alt+i', function(e) {
            setTimeout(function() {
                editor.focus();
            }, 15);
        });
    editor.on('keyup', function(codemirror, e) {
        if (e.altKey) {
            switch (e.keyCode) {
                case 76:
                    // alt + l //change lang
                    langSelect.select2('open');
                    break;
                case 67:
                    // alt + c // copy
                    $('#btn-copy').click();
                    break;
            }

        }
    })

    ! function main() {
        setTimeout(function() {
            editor.focus();
            editor.execCommand('goDocEnd');

        }, 30);
    }();

}(window, document, CodeMirror, window.Clipboard);
