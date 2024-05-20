# Hello, World

Pythonをインストールしたので、さっそく最初のPythonプログラムを書いてみましょう。
新しい言語を学ぶ際に、 `Hello, World!` というテキストを画面に出力する小さなプログラムを書くことは伝統的なことなので、
ここでも同じようにしましょう!

## Pythonのディレクトリを作成する

Pythonコードを格闘するディレクトリを作ることから始めましょう。
Desktopでもどこでも構いませんこの本の練習のためにどこかに
ディレクトリを作成してPythonコードをすべてそこに保管することを推奨します。

## Pythonコードを書いて走らせる

次にそのディレクトリ内で `main.py` という名前のファイルを作成します。
Pythonのファイルは常に `.py` という拡張子で終わります。

さて、作ったばかりの `main.py` ファイルを開き、以下のコードを入力してください

~~~admonish question title="`Hello, World!`という文字を画面に出力します"
```python
print("Hello, World!")
```
~~~

そしたらターミナルに以下のコマンドを打ってPythonプログラムを実行しましょう

```shell
$ python3 main.py
Hello, World!
```

そうすると上記のようにコマンドを打った直後に `Hello, World!` という文字が画面に出力されます。

## Rustコードの解剖

Hello, World! プログラムでいま何が起こったのか詳しく確認しましょう。
とはいっても打ったのはたった以下の一行のコードだけです。

```python
print("Hello, World!")
```

ではこれを要素に分解するところで問題です！

```admonish question title="何個にどこで分解しますか？(クリックで解説を開けます)" collapsible=true
`print()` と `"Hello, World!"` という二つに分解できます
- `print()` は 関数
- `"Hello, World!"` は 文字列

とそれぞれいわれるものです。

### WIP
ここに関数や引数、文字列だけを教える(あとはおいおいchapterが進んだら)
あとはdouble quote をなくしたらどんなのがでるとかいって文字列を教える
```
