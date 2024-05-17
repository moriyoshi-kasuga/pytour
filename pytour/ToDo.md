> 正直これは優先度が低いからまずは問題などを作ってから

Rust で書く clapV4 使って作る github workflow で release に binary 配布してそれを install_pytour.sh で呼べばいい
install_pytour.sh は zsh か bash か判断して .zproflie と .bash_profile にちゃんとコメント含めて PATH の追加をする

# コマンド

- init : pytour フォルダを作成してそのなかに、pytour.toml ファイルを作成して work フォルダにすべて a~ から問題のin-out.toml をdowndloadする
- update: in-out.toml や問題の更新をする
- test {work_id}: wokr_id フォルダないで実行した場合はその work に対してして、{work_id} がある場合はそのwork_id に対して実行する
