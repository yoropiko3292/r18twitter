const wordlist = [[/。/g,"♡"],[/出/g, "射精"],[/フォロー中/g, "わたひの友達♡"],[/45/g, "しこ♡"],[/19/g, "イく♡"],[/４５/g, "しこ♡"],[/１９/g, "イく♡"],[/０７２１/g, "オナニー♡"],[/0721/g, "オナニー♡"],
[/バナナ/g, "ちんぽ♡"],[/男子/g, "ショタ♡"],[/女子/g, "ロリ♡"],[/僕ら/g, "わたひたち"],[/僕/g, "わたひ"],[/君/g, "ご主人しゃま"],[/あなた/g, "ご主人ひゃま"],
[/男の子/g, "男の娘"],[/女の子/g, "メスガキ"],[/マンゴー/g, "おまんこ♡"],[/いく/g, "イク♡"],[/行く/g, "イクっ"],[/、/g, " え、、んっ♡"],[/!/g, "～～っ♡"],
[/は？/g, "はなんれしゅか♡？"],[/は\?/g, "はなんれしゅか♡？"],[/\?/g, "？おしえてくだひゃい♡"],[/！/g, "～～っ♡"],[/？/g, "？おしえてくだひゃい♡"],[/だめ/g, "らめぇ～っ♡"],
[/駄目/g, "らめぇ♡"],[/ダメ/g, "らめにゃのぉ♡"],[/濃厚/g, "こくまろ♡"],[/ラーメン/g, "◯ーメン♡"],[/ミルク/g, "♡♡みるくっ"],[/ほしい/g, "。。ほしいのぉ♡"],[/欲しい/g, "//ほしいのぉ♡"],
[/すき/g, "しゅき♡"],[/好き/g, "しゅき♡"],[/ちいい/g, "ちぃのぉ゛♡"],[/いっぱい/g, "..//いっぱいでたね♡"],[/ばか/g, "ばか♡ばぁか♡"],[/バカ/g, "バカ♡バーカ♡"],
[/クソ/g, "ごみくず♡"],[/かす/g, "かす♡"],[/カス/g, "カス♡"],[/悪く/g, "わりゅく"],[/悪い/g, "わりゅい"],[/馬鹿/g, "バカ♡バーカ♡♡"],[/ざこ/g, "ざーこ♡よわよわ♡"],
[/雑魚/g, "ざぁこ♡よわよわ♡"],[/ザコ/g, "ざーこ♡よわ♡よわ♡"],[/たくさん/g, "...たくさんでたね♡"],[/です/g, "ですうぅっ!"],[/ます/g, "ましゅうぅっ!"],[/でした/g, "でしらのぉ゛っ!"],[/ました/g, "まひらぁっ!"],[/な/g, "にゃ"],
[/さ/g, "しゃ"],[/す/g, "しゅ"],[/ら/g, "りゃ"],[/だ/g, "ら"],[/で/g, "れ"],[/ざ/g, "じゃ"],[/の/g, "のぉ゛っ"],[/つ/g, "ちゅ"],[/ー/g, "～"],[/w/g, "お゛♡"],
[/W/g, "お゛♡"],[/h/g,"えっち♡"],[/H/g,"...えっち。"],[/ｗ/g,"お゛っ♡"],[/彼氏/g,"彼ピ"],[/@/g,"♡"]];

function convertion(){
    document.querySelector("body").style.backgroundColor = "#ffeeee";
    let pf = [...document.getElementsByClassName("css-175oi2r r-ymttw5")];
    let ft = [...document.getElementsByClassName("css-175oi2r r-aqfbo4 r-gtdqiz r-1gn8etr r-1g40b8q")];
    let sft = [...document.getElementsByClassName("css-175oi2r r-1j3t67a r-1b3ntt7 r-ku1wi2")];
    let sftw = [...document.getElementsByClassName("css-175oi2r r-1adg3ll r-1ny4l3l")];
    for(i = 0;i < ft.length;i++){
        ft[i].style.backgroundColor = "#ffeeee";
    }
    let atc = [...document.querySelectorAll("article")];
    atc.push(...pf);
    atc.push(...sft);
    atc.push(...sftw);
    for(i = 0;i < atc.length;i++){
        atc[i].style.backgroundColor = "#ffdddd";
        let spn = [...atc[i].getElementsByClassName("css-1qaijid r-bcqeeo")];
        for(j = 0;j < atc.length;j++){
            if(spn[j] != null || undefined){
                spn[j].className = "ero";
                spn[j].style.color = "#551155";
                for(k = 0;k < wordlist.length;k++) spn[j].textContent = spn[j].textContent.replace(wordlist[k][0], wordlist[k][1]);
                if(!(spn[j].textContent.endsWith("♡//")) && spn[j].textContent.length > 0) spn[j].textContent += "♡//";
            }
        }
    }
}

convertion();
setInterval(convertion,500);
