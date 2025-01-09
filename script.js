// ページの読み込み後、少し遅延してローディング画面を非表示にする
window.onload = function() {
    setTimeout(function() {
        document.getElementById('loading').style.display = 'none';
    }, 2000);  // 2秒待ってから非表示にする
};
