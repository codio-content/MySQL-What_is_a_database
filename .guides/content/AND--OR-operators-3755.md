SQL `AND` & `OR` operators are used to filter records based on more than one condition.

An empty `birthday-ids.sql` file has been opened for you.

Let's _source_ the results of _selecting_ data from the `basic_info` table meeting these conditions:

- The 2016 _birthdays_
- Filter the resulting rows only to get the _id`s_ between 6 and 10
- Sort the results by _email_ in an ascending alphabetical order

```
--- In your birthday-ids.sql file:

USE people;

USE people;

SELECT * FROM basic_info 
WHERE birthday > '2016' -- Date must be a string with the greater or lower than operator
AND id BETWEEN 6 AND 10 
ORDER BY email ASC;
```

Source the file:

```
mysql> source birthday-ids.sql
```
And you should see this:
```
+----+--------------------------+------------+-----------+----------+
| id | email                    | birthday   | country   | city     |
+----+--------------------------+------------+-----------+----------+
|  6 | imperdiet.nec.leo@nec.ca | 2016-07-22 | Hong Kong | Richmond |
| 10 | non.cursus@duinec.edu    | 2016-04-17 | Guatemala | Ilbono   |
+----+--------------------------+------------+-----------+----------+
2 rows in set (0.00 sec)
```

Tadaaah!

All right! Time to reinforce the SQL concepts so far by looking to some examples and completing a challenge afterwards.