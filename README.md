# js-seq-viewer

## Introduction

I built [vim-sequence-diagram](https://github.com/xavierchow/vim-sequence-diagram) a few years ago,
it's convenient for vimers, but some of my friends complain they don't use vim and I've been experiencing Emacs recently.

I need a editor independent tool to view the [JS Sequence Diagram](https://github.com/bramp/js-sequence-diagrams).
Here it is.

## Install

```
npm install -g js-seq-viewer
```

## Usage

```
jsv -f {sequence file path}
```

It launch a web service and open the view in the default browser, when you are editing the sequence file,
the change reflects to the browser instantly when you save your file.


<img src="https://github.com/xavierchow/asset/blob/master/js-seq-viewer/snapshot.gif" height="450">



# License

MIT
