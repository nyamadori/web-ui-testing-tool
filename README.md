# tellurium

## 何をやるか

ブラウザ上のユーザ操作を記録して Ruby (Capybara) 用のテストコードにコードに変換する UI テスト支援ツール。

## 目的

今までわざわざ人の手で入力していたユーザ操作を反復するためのコードを、ブラウザの操作を監視して自動生成するため。

## やることリスト

* [ ] Google Chrome 上のユーザ操作を監視して、操作部分のテストコード (Capybara) を生成する
* [ ] Capybara 以外のテストコード生成に対する配慮 (すぐに対応できるように)
* [ ] Google Chrome 以外のブラウザへの配慮 (すぐに対応できるように)
* [ ] 別デバイスへの配慮 (すぐに対応できるように)

## やらないことリスト

* Capybara 以外のテストコード生成
* Google Chrome 以外のブラウザへの対応
* 美しいツールの UI
* Web アプリケーションとの連係による高度なテスト
  - 網羅性を与える

## やれればうれしいリスト

* [ ] 生成したテストコードを GitHub にプルリクエスト
  - あったらバグ報告しやすいかも
  
## 懸念事項

* ユーザが操作を入力するのでテストに網羅性がない