
# ngx-string-injector [![NPM version](https://img.shields.io/npm/v/ngx-string-injector.svg?style=flat)](https://www.npmjs.com/package/ngx-miniprofiler-overlay)
An easy, clean and customizable way to inject actionable HTML into strings. Useful for translations with placeholders that require links.

## Problem
When dealing with translations, there are moments when we need to have links or click actions. Typically translations have placeholders to indicate where values should go since the location of the placeholder would be different depending on the language. For example:

In English:
```
Please click this link {0}.
```
In Japanese:
```
このリンク{0}をクリックしてください。
```
Many solutions online are not reusable, take time, messy and difficult to maintain. ngx-string-injector tries to solve all these issues.

## Examples
Simple example: [Link](https://stackblitz.com/edit/angular-ivy-dh81vi?file=src/app/simple-example/simple-example.component.ts)

Advanced example with reusable rendering: [Link](https://stackblitz.com/edit/angular-ivy-dh81vi?file=src/app/advanced-example/advanced-example.component.ts)
