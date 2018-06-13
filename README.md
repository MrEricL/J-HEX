# Clover
### Presented by J-HEX
#### Eric Li, Xing Tao Shi, Jacqueline Woo, Henry Zheng<br>SoftDev1 pd8<br>Project 02 -- The Final Frontier

## Website Link
[206.189.228.223](http://206.189.228.223)

## Demonstration Video
[Youtube](https://youtu.be/isq-uBGUVt4)

## Description
J-HEX presents Clover, a financial manager where users will be able to input data about their finances, savings, and expenditures. The user will be able to see a history of their past spendings and set budgets for their future expenditures. Users will also be able to clearly see breakdowns of their expenditures and projected savings via graphs and charts generated by d3. Another feature of Clover is that users will be able to track and manage their stocks. They will be able to easily see the profit they make from their stocks via d3 charts and search up new stocks to add to their portfolio.

## Dependencies
* `from flask import Flask, render_template, request, session, redirect, url_for, flash`
  * requires `pip install flask`
* [`python2.7`](https://www.python.org/download/releases/2.7/)
* `import os, sqlite3`

## Launch Instructions
0. Enter your terminal and go into the directory that you want to have this program in
2. Enter this command to clone our repo
```
git clone https://github.com/JackieW001/J-HEX.git
```
3. Run your virtualenv from wherever you have it (if needed)
```
. <PATH_TO_VIRTUALENV>/bin/activate
```
4. Go into the softdev1-finalproj folder using this command
```
cd J-HEX/clover/
```
5. Add in API key (See API Key Instructions for more details)
6. Run the program
```
python __init__.py
```
7. Go to localhost:5000 in your web browser and enjoy the site!


## API Key Instructions

#### Alpha Vantage
1. Retrive an api key from [Alpha Vantage](https://www.alphavantage.co/documentation/)
2. Paste the API key in a file called ```keys.txt``` in ```/J-HEX/clover/```

## File Structure
```
docs/
  |  database.db
clover/
  data/
    |  data.db
  static/
    js/
      |  home.js
      |  scatter.js
    budget_form.css
    config.js
    home.css
    home.js
    login.css
    settings.css
    stocks.css
  templates/
    |  404.html
    |  base.html
    |  budget_form.html
    |  home.html
    |  login.html
    |  settings.html
    |  stockDisplay.html
    |  stocks.html
  utils/
    |  __init__.py
    |  accounts.py
    |  api.py
    |  db_builder.py
    |  table_builder.py
__init__.py
clover.conf
clover.wsgi
README.md
```
