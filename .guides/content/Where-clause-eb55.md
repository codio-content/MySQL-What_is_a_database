A `birthdays.sql` file has been created and opened for you.
Click on it and type a _SELECT * FROM_ statement that gets only the rows that contain birthdays for 2016 plus sorting them by date order:

```
--- In your birthdays.sql file

USE people;

USE people;

SELECT * FROM basic_info 
WHERE birthday > '2016' 
ORDER BY birthday;
```

Source it: 

```
mysql> source birthdays.sql
```
And you should see this:
```
+----+-------------------------------------+------------+-----------+-------------+
| id | email                               | birthday   | country   | city        |
+----+-------------------------------------+------------+-----------+-------------+
|  3 | tincidunt.tempus.risus@acurnaUt.com | 2016-03-05 | Comoros   | Enines      |
| 10 | non.cursus@duinec.edu               | 2016-04-17 | Guatemala | Ilbono      |
|  4 | sed.pede@nisi.com                   | 2016-07-17 | Kiribati  | Frankenthal |
|  6 | imperdiet.nec.leo@nec.ca            | 2016-07-22 | Hong Kong | Richmond    |
+----+-------------------------------------+------------+-----------+-------------+
4 rows in set (0.00 sec)
```

Get ready for a challenge in the next section.