window.onload = function() {
    // ローディング画面を2秒後に非表示
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        showMessage(["welcome", "to tamavell's Portfolio"], () => {
            // 最後のメッセージ表示後にメインコンテンツを表示
            document.getElementById('welcome').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
        });
    }, 2000);
};

// メッセージを順番にタイプライター風に表示する関数
function showMessage(messages, callback) {
    const welcome = document.getElementById('welcome');
    const typewriter = document.getElementById('typewriter');
    let messageIndex = 0;

    welcome.style.display = 'flex'; // ウェルカム画面を表示

    function typeMessage(message) {
        let index = 0;
        typewriter.textContent = ""; // 前のメッセージをクリア

        const interval = setInterval(() => {
            typewriter.textContent += message[index];
            index++;
            if (index === message.length) {
                clearInterval(interval);
                messageIndex++;

                if (messageIndex < messages.length) {
                    // 次のメッセージを表示
                    setTimeout(() => typeMessage(messages[messageIndex]), 1000);
                } else {
                    // 全てのメッセージが表示された後にコールバックを実行
                    setTimeout(callback, 2000);
                }
            }
        }, 150); // 各文字の表示間隔
    }

    typeMessage(messages[messageIndex]);
}
