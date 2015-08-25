We've created a DATABASE called: `people`

List the existing databases in your current `mysql>` prompt by executing: 

```
# Mind the ending semi-colon:
mysql> SHOW DATABASES;

+--------------------+ 
| Database           | 
+--------------------+ 
| information_schema | 
| people             | 
| test               | 
+--------------------+ 
3 rows in set (0.00 sec)
```

|||info
### Semicolons are part of the SQL syntax
Whenever you forget to type an ending semicolon `;`, a new prompt inside the `mysql>` interactive screen will be created: `->`. 

Don't worry, it's easy to get out of this prompt.

Just type: `\c` and press enter.
|||

---
Now that you've indentified the `people` database, let's enter it and display some data!