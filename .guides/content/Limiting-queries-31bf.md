So far, the `SELECT column_name FROM table_name;` statement has been returning the total number of rows that the database table has (10 rows). 

In a common application database, there would be more than 10 table records for sure! 

Requesting all database table records could compromise the performance and user experience of your app.

Let's limit the records to be requested by executing: 

```
mysql> SELECT NAME,SURNAME FROM names LIMIT 5;

+----------+----------+  
| NAME     | SURNAME  |  
+----------+----------+  
| Pamela   | Lyons    |  
| Daria    | Kelley   |  
| Morgan   | Aguirre  |  
| Angelica | Mccarthy |  
| Xena     | French   |  
+----------+----------+  
5 rows in set (0.00 sec) // Only 5 rows were requested
```

It would be great if we could order or sort the rows by alphabetical order right?

Sure we can! Let's learn how to order the results of a database table query plus limiting the number of rows in the next section.