In the previous section we learned how to manipulate data with the `SELECT * FROM table_name;` statement. 

Let's _SELECT_ data just from 2 columns (_email_ and _birthday_) of the `basic_info` table (remember that the `people` database must be in `USE`) (remember that the `people` database must be in `USE`):

```
mysql> SELECT email,birthday FROM basic_info;
```
And you should see this:
```
+--------------------------------------------+------------+
| email                                      | birthday   |
+--------------------------------------------+------------+
| erat.semper.rutrum@ipsumCurabitur.com      | 2014-12-15 |
| Proin.sed.turpis@scelerisqueneque.ca       | 2015-08-06 |
| tincidunt.tempus.risus@acurnaUt.com        | 2016-03-05 |
| sed.pede@nisi.com                          | 2016-07-17 |
| adipiscing@lorem.net                       | 2015-02-23 |
| imperdiet.nec.leo@nec.ca                   | 2016-07-22 |
| fermentum.vel@risusDonec.co.uk             | 2015-01-16 | 
| vel@natoquepenatibuset.edu                 | 2015-09-27 | 
| Suspendisse.eleifend.Cras@justonecante.net | 2014-12-18 | 
| non.cursus@duinec.edu                      | 2016-04-17 | 
+--------------------------------------------+------------+ 
10 rows in set (0.00 sec)
```

For now, we are requesting all of the rows (10 in total) of the _basic_info_ which belongs to _people_ database. 

Let's learn how to limit the request to a determinate number of rows in the next section. 