Time to be more specific with our SQL queries. 

Whenever you may want to select specific data from a database table, the _WHERE_ clause of the _SELECT FROM_ data manipulation statement comes very handy.

The `people.sql` has been opened for you. 

An advantage of writing SQL code in a `*.sql` file is that we can use new lines to make our code more readable.

Let's _SELECT_ from the _names_ table only the _surname_ that is equal to the text string, _Steele_ (remember that text strings are one of the many datatypes SQL recognizes and must be written inside single or double quotes):

```
-- Inside the people.sql file:

SELECT * FROM names 
WHERE surname = 'Steele';
```

Source it like this: 

```
mysql> source people.sql
```
And you should see this:
```
+----+-------+---------+
| id | name  | surname |
+----+-------+---------+
|  9 | Tasha | Steele  |
+----+-------+---------+
1 row in set (0.00 sec)
```