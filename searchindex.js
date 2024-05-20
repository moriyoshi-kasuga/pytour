Object.assign(window.search, {"doc_urls":["pytour.html#the-python-programming-tour","foreword.html#まえがき","ch00-00-introduction.html#はじめに","ch01-00-getting-started.html#事始め","ch01-01-installation.html#インストール","ch01-01-installation.html#mac-に-homebrew-と-python-をインストール","ch01-02-hello-world.html#hello-world","ch01-02-hello-world.html#pythonのディレクトリを作成する","ch01-02-hello-world.html#pythonコードを書いて走らせる","ch01-02-hello-world.html#rustコードの解剖"],"index":{"documentStore":{"docInfo":{"0":{"body":7,"breadcrumbs":6,"title":3},"1":{"body":0,"breadcrumbs":0,"title":0},"2":{"body":6,"breadcrumbs":0,"title":0},"3":{"body":8,"breadcrumbs":0,"title":0},"4":{"body":1,"breadcrumbs":0,"title":0},"5":{"body":13,"breadcrumbs":3,"title":3},"6":{"body":2,"breadcrumbs":4,"title":2},"7":{"body":0,"breadcrumbs":3,"title":1},"8":{"body":14,"breadcrumbs":3,"title":1},"9":{"body":13,"breadcrumbs":3,"title":1}},"docs":{"0":{"body":"著: moriyoshi-kasuga ここでは新しくPythonを学ぼうとするために書いた(もしくは書いている)本です この本ではPython 3 が使われていることを前提としています。 Pythonをインストールしたりアップデートするには 第一章の「インストール」 節をよんでください この本は https://github.com/moriyoshi-kasuga/pytour/tree/main/book で公開されています","breadcrumbs":"The Python Programming Tour » The Python Programming Tour","id":"0","title":"The Python Programming Tour"},"1":{"body":"注釈:自分がまだ学生であまり文を書くわけではないのでところどころ言葉がおかしいかもしれません、 それを頭に入れてゆっくり読んでもらえればいいかなとおもいます。","breadcrumbs":"まえがき » まえがき","id":"1","title":"まえがき"},"2":{"body":"この本では Python の初歩的な部分を解説していきます。 ですがこれらすべてが確実に正しいかといわれるとそうではありません、 私もまだまだ Python を学んで 1年 しかたっていません、ですからわかりにくい説明や 間違えた解説をするかもしれません、その場合は自分で調べるか、 github の issue や直接自分に言いに来てください。 この本では Python の知識以外に考え方なども入れておこうと思います、 ですがあくまでこの知識は主観であったり、引用をする知識も主観で決めているので偏りがあります、 ですので学ぶにおいてこんな考え方もあるんだな程度にとどめておいてください すべてが一つのものでできるわけではなく、適材適所です。","breadcrumbs":"はじめに » はじめに","id":"2","title":"はじめに"},"3":{"body":"ではさっそくPythonを学び始めるとしましょう！ Python を mac にインストールする Hello, world!と表示するプログラムを書く Hello, Python!と表示するWorkを解く mac 以外はいろいろとめんどくさいのでこの本では解説しません。","breadcrumbs":"事始め » 事始め","id":"3","title":"事始め"},"4":{"body":"最初の手順は、Pythonをインストールすることです。この本では Homebrew を使います。 コマンドラインの記法 この章及び、本を通して、端末で使用するなんらかのコマンドを示すことがあります。読者が入力するべき行は、 全て$で始まります。ただし、読者が$文字を入力する必要はありません; これは各コマンドの開始を示しているだけです。 $で始まらない行は、典型的には直前のコマンドの出力を示します。","breadcrumbs":"事始め » インストール » インストール","id":"4","title":"インストール"},"5":{"body":"ターミナルを開いて、以下のコマンドを入力することで簡単にインストールができます $ /bin/bash -c \"$(curl -fsSL https://raw.githubusercontent.com/moriyoshi-kasuga/pytour/main/book/src/bin/install_python.sh)\" このコマンドはスクリプトを入手して、homebrew のインストールを開始します。 パスワードを求められる可能性があります。インストールがうまくいけば以下の行が出現するでしょう！ HomeBrew and Python is installed now. Great! これによりもう Python がインストールされました。","breadcrumbs":"事始め » インストール » mac に Homebrew と Python をインストール","id":"5","title":"mac に Homebrew と Python をインストール"},"6":{"body":"Pythonをインストールしたので、さっそく最初のPythonプログラムを書いてみましょう。 新しい言語を学ぶ際に、 Hello, World! というテキストを画面に出力する小さなプログラムを書くことは伝統的なことなので、 ここでも同じようにしましょう!","breadcrumbs":"事始め » Hello, World! » Hello, World","id":"6","title":"Hello, World"},"7":{"body":"Pythonコードを格闘するディレクトリを作ることから始めましょう。 Desktopでもどこでも構いませんこの本の練習のためにどこかに ディレクトリを作成してPythonコードをすべてそこに保管することを推奨します。","breadcrumbs":"事始め » Hello, World! » Pythonのディレクトリを作成する","id":"7","title":"Pythonのディレクトリを作成する"},"8":{"body":"次にそのディレクトリ内で main.py という名前のファイルを作成します。 Pythonのファイルは常に .py という拡張子で終わります。 さて、作ったばかりの main.py ファイルを開き、以下のコードを入力してください Hello, World!という文字を画面に出力します print(\"Hello, World!\") そしたらターミナルに以下のコマンドを打ってPythonプログラムを実行しましょう $ python3 main.py\nHello, World! そうすると上記のようにコマンドを打った直後に Hello, World! という文字が画面に出力されます。","breadcrumbs":"事始め » Hello, World! » Pythonコードを書いて走らせる","id":"8","title":"Pythonコードを書いて走らせる"},"9":{"body":"Hello, World! プログラムでいま何が起こったのか詳しく確認しましょう。 とはいっても打ったのはたった以下の一行のコードだけです。 print(\"Hello, World!\") ではこれを要素に分解するところで問題です！ 何個にどこで分解しますか？(クリックで解説を開けます) print() と \"Hello, World!\" という二つに分解できます print() は 関数 \"Hello, World!\" は 文字列 とそれぞれいわれるものです。 WIP ここに関数や引数、文字列だけを教える(あとはおいおいchapterが進んだら) あとはdouble quote をなくしたらどんなのがでるとかいって文字列を教える","breadcrumbs":"事始め » Hello, World! » Rustコードの解剖","id":"9","title":"Rustコードの解剖"}},"length":10,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"df":1,"docs":{"2":{"tf":1.0}}},"3":{"df":1,"docs":{"0":{"tf":1.0}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"/":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"c":{"df":1,"docs":{"5":{"tf":1.0}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":4,"docs":{"3":{"tf":1.4142135623730951},"6":{"tf":1.4142135623730951},"8":{"tf":1.7320508075688772},"9":{"tf":1.7320508075688772}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"r":{"a":{"df":0,"docs":{},"w":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"k":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"a":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"/":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"r":{"c":{"/":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"/":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"/":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}},"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"m":{"a":{"c":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"5":{"tf":1.0}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"y":{"df":1,"docs":{"8":{"tf":1.0}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"!":{"df":0,"docs":{},"と":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"す":{"df":0,"docs":{},"る":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}},"3":{"df":1,"docs":{"8":{"tf":1.0}}},"df":6,"docs":{"0":{"tf":1.7320508075688772},"2":{"tf":1.7320508075688772},"3":{"tf":1.4142135623730951},"5":{"tf":1.7320508075688772},"7":{"tf":1.0},"8":{"tf":1.4142135623730951}}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":4,"docs":{"3":{"tf":1.0},"6":{"tf":1.4142135623730951},"8":{"tf":2.0},"9":{"tf":2.0}}},"df":0,"docs":{}}}}}}},"breadcrumbs":{"root":{"1":{"df":1,"docs":{"2":{"tf":1.0}}},"3":{"df":1,"docs":{"0":{"tf":1.0}}},"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"/":{"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"c":{"df":1,"docs":{"5":{"tf":1.0}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"l":{"df":1,"docs":{"9":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":5,"docs":{"3":{"tf":1.4142135623730951},"6":{"tf":2.0},"7":{"tf":1.0},"8":{"tf":2.0},"9":{"tf":2.0}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":2,"docs":{"4":{"tf":1.0},"5":{"tf":2.0}}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"t":{"df":0,"docs":{},"p":{"df":0,"docs":{},"s":{":":{"/":{"/":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"r":{"a":{"df":0,"docs":{},"w":{".":{"df":0,"docs":{},"g":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"u":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{".":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"/":{"df":0,"docs":{},"m":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"5":{"tf":1.0}}}}}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"5":{"tf":1.0}}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"k":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"u":{"df":0,"docs":{},"g":{"a":{"/":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"/":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"/":{"df":0,"docs":{},"s":{"df":0,"docs":{},"r":{"c":{"/":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"/":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"_":{"df":0,"docs":{},"p":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"5":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"/":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"/":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{}}}}}}}},"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}}}},"df":0,"docs":{}},"m":{"a":{"c":{"df":2,"docs":{"3":{"tf":1.4142135623730951},"5":{"tf":1.4142135623730951}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{".":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"8":{"tf":1.7320508075688772}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"y":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}}}},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"(":{"\"":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":2,"docs":{"8":{"tf":1.0},"9":{"tf":1.0}}}}}}}},"df":0,"docs":{}},"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}},"y":{"df":1,"docs":{"8":{"tf":1.0}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"!":{"df":0,"docs":{},"と":{"df":0,"docs":{},"表":{"df":0,"docs":{},"示":{"df":0,"docs":{},"す":{"df":0,"docs":{},"る":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}}}},"3":{"df":1,"docs":{"8":{"tf":1.0}}},"df":6,"docs":{"0":{"tf":2.23606797749979},"2":{"tf":1.7320508075688772},"3":{"tf":1.4142135623730951},"5":{"tf":2.0},"7":{"tf":1.4142135623730951},"8":{"tf":1.7320508075688772}}}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.4142135623730951}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":1,"docs":{"9":{"tf":1.0}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":5,"docs":{"3":{"tf":1.0},"6":{"tf":2.0},"7":{"tf":1.0},"8":{"tf":2.23606797749979},"9":{"tf":2.23606797749979}}},"df":0,"docs":{}}}}}}},"title":{"root":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":1,"docs":{"6":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"5":{"tf":1.0}}}}}},"df":0,"docs":{}}}}},"m":{"a":{"c":{"df":1,"docs":{"5":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}}}},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":4,"docs":{"0":{"tf":1.0},"5":{"tf":1.0},"7":{"tf":1.0},"8":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"u":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"9":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":1,"docs":{"6":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":20,"teaser_word_count":30},"search_options":{"bool":"AND","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":2},"title":{"boost":2}}}});