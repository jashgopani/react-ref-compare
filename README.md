# react-ref-compare

A simple utility for comparing refs in React.js with either refs or DOM Elements.

[![GitHub issues](https://img.shields.io/github/issues/jashgopani/react-ref-compare)](https://github.com/jashgopani/react-ref-compare/issues) [![GitHub forks](https://img.shields.io/github/forks/jashgopani/react-ref-compare)](https://github.com/jashgopani/react-ref-compare/network) [![GitHub stars](https://img.shields.io/github/stars/jashgopani/react-ref-compare)](https://github.com/jashgopani/react-ref-compare/stargazers)

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Usage](#usage)
  - [1. compareRef ( object1, object2 )](#1-compareref--object1-object2-)
  - [2. stringify ( Object )](#2-stringify--object-)

## Features
- Compare DOM and Virtual DOM elements by comparing `ref` with `ref` or with `DOM Element`.
- Get a unique String representation of the `DOM Element` or `ref` Object.
  
## Installation

```
npm i react-ref-compare
```

## Getting Started

```javascript
import compareRef, { stringify } from "react-ref-compare";
```

## Usage

### 1. compareRef ( object1, object2 )

Use this method to compare two objects where each object is either a react `ref` or a `DOM Element`.
This method returns `boolean` value.

> **Note:** You cannot compare refs that are not of DOM or Virtual DOM elements

```javascript
import compareRef, { stringify } from "react-ref-compare";
function CustomTextInput(props) {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(3);

  function handleClick(e) {
    //comparing ref with ref
    if (compareRef(ref1, ref2)) {
      //do something
    }

    //comparing ref with domElement
    const domElement = document.elementFromPoint(e.clientX, e.clientY);
    if (compareRef(ref1, domElement)) {
      //do something
    }

    //invalid usage
    compareRef(ref1, ref3);
  }

  return (
    <div>
      <input type="text" ref={ref1} />
      <input
        type="button"
        value="Focus the text input"
        ref={ref2}
        onClick={handleClick}
      />
    </div>
  );
}
```

### 2. stringify ( Object )

This method returns a `String` that can be used to identify a DOM / Virtual DOM element. This type of string can be seen when you log elements in console.
This returns a string of the format

```javascript
//dom element
<div id="container" class="container-fluid outer-box">Some content</div>;

//stringify output -> tagName#id.className
div#container.container-fluid outer-box;
```
