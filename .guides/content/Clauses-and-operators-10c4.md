We can either write SQL statements directly in the `mysql>` shell or write SQL statements in `*.sql` files.
In order to do so:

1. Create a `*.sql` file with the name of your preference
2. Initiate a `mysql` shell
3. Run the `source file-name.sql` command so SQL reads from the file

We've created a `sql-example.sql` file on the file tree, try opening it, paste the following code and _source_ it afterwards:

```
USE people;
SELECT * FROM basic_info
WHERE birthday != 2014
AND id BETWEEN 3 AND 7
ORDER BY email ASC;
```
<small>Can you tell what each of the lines is doing?</small>

Select the _email_ column of the `basic_info` table and sort the results by email in _ascending_ order:

```
SELECT email FROM basic_info
ORDER BY email DESC;
```

Select the _country_ and _city_ rows of the `basic_info` table. Limit the results to 3 rows:

```
SELECT country,city FROM basic_info
LIMIT 3;
```

Get the records from the `names` table _where_ the _id_ is _greater than_ 5:

```
SELECT * FROM names
WHERE id > 5;
```

Get the records from the `names` table where the _SURNAME_ is equal to 'Britt':

```
SELECT * FROM names
WHERE SURNAME = 'Britt';
```

Get the _id_, _birthday_ and _country_ columns of the `basic_info` table only if they are between the _birthday_ date 2015 and 2016. Order the results by _birthday_ descending order:

```
SELECT id,birthday,country FROM basic_info
WHERE birthday BETWEEN 2015 AND 2016 -- Date is not a string with the BETWEEN operator
ORDER BY birthday DESC;
```

Get the records of the `basic_info` table _except_ the ones that are of the year 2014, order the results by _email_ in ascending order. 
Filter the results even more by getting only the _ids_ from 3 to 7:

```
SELECT * FROM basic_info
WHERE birthday <> 2014 -- <> operator can also be written like: !=
AND id BETWEEN 3 AND 7
ORDER BY email ASC;
```

Get ready for a challenge in the next section.