var endSlideinFoxkeh = function(){
//slideinFoxkehの最後のパーツ。functionで{}内の動作をするという指示。
	var foxkeh = document.querySelector("#slidein-foxkeh img");
//foxkehという名前で"#slidein-foxkeh img"がくるように指定している。
	foxkeh.setAttribute("class", "");
//HTMLの属性を変更。foxkehに存在する”class”を、指定なし。
//つまり、アニメーション終了。
};

var startSlideinFoxkeh = function(){
//slideinFoxkehの最初のパーツ。functionで{}内の動作をするという指示。
	var foxkeh = document.querySelector("#slidein-foxkeh img");
//foxkehという名前で"#slidein-foxkeh img"がくるように指定している。
	foxkeh.setAttribute("class", "slidein");
//HTMLの属性を変更。foxkehに存在する”class”を、”slidein”に属性変更している。
//つまり、foxkehがスライドインされる。
	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
//addEventListenerでイベントターゲットにイベントリスナーを1つ登録。
//つまり"animationend"というイベントのリスナーをendSlideinFoxkehと登録するという構文。
//endSlideinFoxkehにうつるという指定を意味している。
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
//slideinFoxkehButtonという名前で"#slidein-foxkeh button"がくるように指定している。
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//「addEventListener」でイベントターゲットにイベントリスナーを１つ登録。
//つまり"click"というイベントのリスナーをstartSlideinFoxkehと登録するという構文。
//startSlideinFoxkehの動作にうつるという指定を意味している。

//Dear　ちこさん
//おまけです。
//アニメーションを編集したのでみてください(❛ᴗ❛人)✧