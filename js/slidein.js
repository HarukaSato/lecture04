var endSlideinFoxkeh = function(){
//slideinFoxkehの最後のパーツ。functionで動作をするという指示。
	var foxkeh = document.querySelector("#slidein-foxkeh img");
//foxkehという名前で"#slidein-foxkeh img"がくるように指定している。
	foxkeh.setAttribute("class", "");
//HTMLの属性を変更。foxkehに存在する”class”を、指定なし（？）
};

var startSlideinFoxkeh = function(){
//slideinFoxkehの最初のパーツ。functionで動作をするという指示。
	var foxkeh = document.querySelector("#slidein-foxkeh img");
//foxkehという名前で"#slidein-foxkeh img"がくるように指定している
	foxkeh.setAttribute("class", "slidein");
//HTMLの属性を変更。foxkehに存在する”class”を、”slidein”にしている。
//つまり、foxkehがスライドインされる。
	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
//addEventListenerでイベントターゲットにイベントリスナーを 1 つ登録。
//"animationend"にendSlideinFoxkehを登録する構文。
//endSlideinFoxkehにうつるという指定を意味している。
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
//slideinFoxkehButtonという名前で"#slidein-foxkeh button"がくるように指定している。
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//addEventListenerでイベントターゲットにイベントリスナーを 1 つ登録。
//"click"にstartSlideinFoxkehを登録する構文。
//startSlideinFoxkehの動作にうつるという指定を意味している。
