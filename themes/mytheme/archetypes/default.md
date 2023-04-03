---
title: "{{ replace .Name "-" " " | title }}"
draft: true
description: ""
date: "{{ today }}"  
menu:
  main:
    identifier: "{{ lower (replace .Name "-" "")  }}"
    weight: 100 
    parent: ""
---
