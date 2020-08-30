---
title: Classic 模式的 HTML 元素測試
date: 2020-08-28 
categories: ['測試']
tags: ['Test', 'Html', 'Markdown']
---

## 標題元素

## H2
### H3
#### H4
##### H5
###### H6

## 有序清單

1. ol1
    1. ol1-1
    2. ol1-2
2. ol2
    1. ol2-1
    2. ol2-2
    3. ol2-3
3. ol3
4. ol4

## 無序清單

- ul1
  - ul1-1
  - ul1-2
- ul2
  - ul2-1
  - ul2-2
  - ul2-3
- ul3
- ul4
- ul5

## 段落區塊

這篇文章用於測試及預覽文章編寫時的元素，內容包含 h2 ~ h6 、 ol / li 、 ul / li ...等，基本上編寫文章時常用的元素測試都會放在這邊，方便觀看預覽效果。 


## 引用區塊

> blockquote 測試區塊  
> 通常用於放置一些外部資訊、參照資料。

## 標記區塊

<pre>
……@@@::…………
……(  •̀ω •́  )::……∧_∧=つ≡つ      
  /⌒ ♡  ⌒)::（     `  Д´)=つ≡つ   
/へ_＿  / /::  （っ ≡つ=つ
(＿＼＼  ﾐ)/::  |　　  /
　 ｜ `-イ::    （   ヽノ
　 /ｙ　 )::　ﾉ>ノ
　/／  ／::    レﾚ
／　／::  Muda Muda Muda Muda
(　く:::
|＼ ヽ:::
</pre>

## Markdown 容器測試

### Message Container

**輸入**
```html
::: custom-error Error
  This is custom-error block.
:::


::: custom-warn Warning
  This is custom-warn block.
:::


::: custom-info Info
  This is custom-info block.
:::


::: custom-tips Tips
  This is custom-tips block.
:::
```

**結果**
::: custom-error Error
  This is custom-error block.
:::


::: custom-warn Warning
  This is custom-warn block.
:::


::: custom-info Info
  This is custom-info block.
:::


::: custom-tips Tips
  This is custom-tips block.
:::

### Align Container

**輸入**
```html{1,4}
::: align-center
  <div style="width: 80px;">
    <GithubIcon/>
  </div>
:::

::: align-right
  <div>
    <h3>Align-right</h3>
  </div>
:::

```
**結果**
::: align-center
  <div style="width: 80px;">
    <GithubIcon/>
  </div>
:::

::: align-right
  <div>
    <h3>Align-right</h3>
  </div>
:::

## 整體效果混合預覽

進行文章撰寫時經常會交叉使用許多 element ，如**粗體**、*斜體*亦或者是[超連結](https://saweicore.com)。 偶爾加入表格進行補充說明：

| 要素 | 預覽 |
| ---- | --- |
| strong | **粗體** |
| em   |  *斜體* |
| hyperlink | [超連結](https://saweicore.com) |

或是加入一些清單元素，例如：

- 列舉各種事項
- 提出一些問題
- 說明一點看法

如果在文章中使用到一些外部資源也可以透過 blockquote 進行引用，例如：

> 名稱： 邊緣沙威瑪  
> 網址： <https://saweicore.com>
