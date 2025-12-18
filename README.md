# scriptapi-template

ScriptAPIアドオンのテンプレートです。

## Features
- TypeScript
- バンドル (tsdown)
- リリース時にGitHub Actionsを使ってmcpackを自動生成

## 環境構築
- パッケージマネージャーには [pnpm](https://pnpm.io/) を使います。
- `pnpm i`
- `pnpm build` でビルド

## Scripts
- `pnpm run build`
- `pnpm run watch`

## その他

- mcpackに含まれるファイルは、`package.json`の`files`フィールドで定義されています。
- ScriptAPI環境用の型定義として [`@bedrock-apis/env-types`](https://github.com/bedrock-apis/env-types) を使用しています。
