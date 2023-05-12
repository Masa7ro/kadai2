// キャラクター選択時の処理
// 引数に選択したキャラクター名を取得して
// 画像を切り替える

function selectChar(charName) {
    // 選択されたキャラクター名を表示
    document.getElementById("selectedCharacter").innerHTML = "選択されたキャラクター：" + charName;
}


// じゃんけんの手
// 0:グー
// 1:チョキ
// 2:パー
// として処理する

function rsp(playerSelect) {
    let result;
    let playerSelectHand;
    let resultString;
    let random = Math.random();
    let comSelect = Math.floor(random * 3);
    console.log(comSelect)
    console.log(playerSelect);

    // 勝ち負けはプレイヤーが
    // 0:負け
    // 1:勝ち
    // 2:あいこ

    if (playerSelect == comSelect) {
        // 一緒だったらあいこ
        result = 2;

    } else {
        // 違うので条件によって勝敗を振り分ける
        if (playerSelect == 0) {
            //プレイヤーはグー
            if (comSelect == 1) {
                // コンピューターはチョキ
                result = 1;
            } else {
                // コンピューターはパー
                result = 0;
            }

    } else if (playerSelect == 1) {
        //プレイヤーはチョキ
        if (comSelect == 0) {
            // コンピューターはグー
            result = 0;
        } else {
            //  コンピューターはパー
            result = 1;
        }
    } else {
        //プレイヤーはパー
        if (comSelect == 0) {
            // コンピューターはグー
            result = 1;
        } else {
            // コンピューターはチョキ
            result = 0;
        }
    }
}
console.log(result);

if (playerSelect == 0) {
    playerSelectHand = 'グー';
} else if (playerSelect == 1) {
    playerSelectHand = 'チョキ';
} else {
    playerSelectHand = 'パー';
}

if (comSelect == 0) {
    comSelectHand = 'グー';
} else if (comSelect == 1) {
    comSelectHand = 'チョキ';
} else {
    comSelectHand = 'パー';
}

if (result == 0) {
    resultString = 'lose';
} else if (result == 1) {
    resultString = 'win';
} else {
    resultString = 'あいこ'
}


document.getElementById('playerselect').innerHTML = 'YOU ARE_' + playerSelectHand;
document.getElementById('computerselect').innerHTML = 'ENERMY_ is ' + comSelectHand;
document.getElementById('resultMsg').innerHTML = 'RESULT_' + resultString;


じゃんけんの手を選択した時の処理
function rspSelect(playerSelect) {
    console.log(playerSelect);
    rsp(playerSelect);
}

勝ちの場合
document.getElementById('resultMsg').textContent = 'You Win!';
document.getElementById('win-img').style.display = 'block';
document.getElementById('lose-img').style.display = 'none';
document.getElementById('result-popup').style.display = 'block';

// 負けの場合
document.getElementById('resultMsg').textContent = 'You Lose!';
document.getElementById('win-img').style.display = 'none';
document.getElementById('lose-img').style.display = 'block';
document.getElementById('result-popup').style.display = 'block';


}
