function janken(user) {
    // コンピュータの手の画像ファイル名を配列に保存
    let pcJankens = ['gu_rev.png', 'choki_rev.png', 'pa_rev.png'];
 
    // ユーザの手の画像ファイル名を配列に保存
    let userJankens = ['enermyA.jpeg', 'enermyB.jpeg', 'enermyC.jpeg'];
 
    // コンピュータの手を乱数(0～2）で作成
    let pc = Math.floor(Math.random() * 3);
 
    // ユーザの手の画像を表示するimgタグをDOMツリーから検索
    let userImg = document.getElementById("userImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    userImg.src = "img/" + userJankens[user];
 
    // コンピュータの手の画像を表示するimgタグをDOMツリーから検索
    let pcImg = document.getElementById("pcImg");
    // 検索したimgタグのsrc属性に該当するファイル名を設定
    pcImg.src = "img/" + pcJankens[pc];
 
    // ユーザから見た勝敗結果(文字列)を2次元配列に保存
    let result = [['あいこ', '勝ち', '負け'],
                  ['負け', 'あいこ', '勝ち'],
                  ['勝ち', '負け', 'あいこ']];
 
    // 勝敗結果を
    document.getElementById("result").textContent = result[user][pc];
}