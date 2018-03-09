# Cash

This project allows to convert currencies. You can choose the amount you want to convert and the currancy and the program gives you the result. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

* Fork the project via `github`
* Clone your forked repository project `https://github.com/YOUR_USERNAME/3-musketeers`

```sh
❯ cd /path/to/workspace
❯ git clone git@github.com:YOUR_USERNAME/3-musketeers.git
```
* On the terminal of the project, you need to go on the cash directory
```sh
❯ cd /path/to/cash
```
## Prerequisites

You need to install some dependencies so you can type on the terminal

```sh
❯ npm install
```
## Running the project

To run the project you need to type 
```sh
❯ node index.js
```
You can now choose an amount of money, the origin currency and the one you want to convert to. For example, if you want to convert one usd to eur you can type this : 

```sh
❯ node index.js 1 usd eur
```
It is good to know that there are some currencies saved as default currencies. You have the possibility to change these default ones. For example, if you want to save pln as a default currency you can run this command: 

```sh
❯ node index.js --s pln
```
Now, to convert pln currency you can just put the amount you want to convert.

```sh
❯ node index.js 100
```
You can have all the commands needed in this project using the help command. 
```sh
❯ node bin/index.js --help
```
## Built With

* Javascript
* Node js

## Authors
Yassine Azzout

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)

