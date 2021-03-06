# js-seq-viewer

## Introduction

I built [vim-sequence-diagram](https://github.com/xavierchow/vim-sequence-diagram) a few years ago,
it's convenient for vimers, but some of my friends complain they don't use vim and I've been experiencing Emacs recently.

I need an editor independent tool to view the [JS Sequence Diagram](https://github.com/bramp/js-sequence-diagrams).
Here it is.

## Install

```
npm install -g js-seq-viewer
```

## Usage

```
jsv -f {sequence file path}
```

It launches a web service and opens the view in the default browser when you are editing the sequence file,
it reflects the change instantly when you save your file.


<img src="https://github.com/xavierchow/asset/blob/master/js-seq-viewer/snapshot.gif" height="450">


# License

MIT
