# インストール

最初の手順は、Pythonをインストールすることです。この本では `Homebrew` を使います。

> ### コマンドラインの記法
>
> この章及び、本を通して、端末で使用するなんらかのコマンドを示すことがあります。読者が入力するべき行は、
> 全て`$`で始まります。ただし、読者が`$`文字を入力する必要はありません; これは各コマンドの開始を示しているだけです。
> `$`で始まらない行は、典型的には直前のコマンドの出力を示します。

## mac に Homebrew と Python をインストール

ターミナルを開いて、以下のコマンドを入力することで簡単にインストールができます

```shell
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/moriyoshi-kasuga/install/HEAD/book/bin/install_python.sh)"
```

このコマンドはスクリプトを入手して、`homebrew` のインストールを開始します。
パスワードを求められる可能性があります。インストールがうまくいけば以下の行が出現するでしょう！

```text
HomeBrew and Python is installed now. Great!
```

これによりもう `Python` がインストールされました。
