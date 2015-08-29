SQL `AND` & `OR` operators are used to filter records based on more than one condition.

An empty `birthday-ids.sql` file has been opened for you.

Let's _source_ the results of _selecting_ data from the `basic_info` table meeting these conditions:

- The 2016 _birthdays_
- Filter the resulting rows only to get the _id`s_ between 6 and 10
- Sort the results by _email_ in an ascending alphabetical order

```
# In your birthday-ids.sql file:

SELECT * FROM basic_info 
WHERE birthday > '2016'
AND id BETWEEN 6 AND 10 
ORDER BY email ASC;
```

Source the file:

```
mysql> source birthday-ids.sql
```

Tadaaah!

Complete the final challenge and keep learning SQL in unit 2!