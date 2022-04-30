#!/bin/bash
cd /tmp/

isExistApp = `pgrep httpd`

pkill node

yum remove -y httpd

pm2 delete all
pm2 start server.js