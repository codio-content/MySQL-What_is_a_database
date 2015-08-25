Now that we know that there are 2 existing tables inside the `people` database, let's _SELECT_ some records from one of them, the `names` table.

Click on your terminal window and execute the following SQL statement:

```
mysql> SELECT * FROM names;

+----+----------+----------+ 
| id | NAME     | SURNAME  | 
+----+----------+----------+ 
|  1 | Pamela   | Lyons    | 
|  2 | Daria    | Kelley   | 
|  3 | Morgan   | Aguirre  | 
|  4 | Angelica | Mccarthy | 
|  5 | Xena     | French   | 
|  6 | Colby    | Albert   | 
|  7 | Xenos    | Duke     | 
|  8 | Clark    | Shields  | 
|  9 | Tasha    | Steele   | 
| 10 | Yeo      | Britt    | 
+----+----------+----------+ 
10 rows in set (0.00 sec) // Time taken to complete request
```

A SQL statement is a set of instructions that are chained together in order for the program to understand and run a request.

_SQL statements_ often begin with a verb.

By executing the `SELECT * FROM names;` SQL statement we are:

- *SELECT*ing or requesting the data from all the table columns
- The `*` symbol indicates _all_ data from those columns
- The `FROM` modifier indicates the place where the data is going to be taken from. In this case, the `names` table

--- 
Queries for individual table columns can be performed too by specifying the attribute or column name in the statement.
But first, complete the challenge in the next section!