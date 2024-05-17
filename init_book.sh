#!/bin/bash

cargo install mdbook

cargo install mdbook-mermaid

cargo install mdbook-admonish

(
	cd mdbook-pytour || exit

	cargo test --verbose

	cargo clippy --all-targets --all-features

	cargo fmt --all --check

	cargo install --path .
)

cd book || exit

mdbook-mermaid install

mdbook build
