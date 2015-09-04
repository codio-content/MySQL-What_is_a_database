The `basic_info` table of the `people` database contains the following columns (or attributes): 

- id
- email
- birthday
- country 
- city

Let's execute a query for _selecting_ the `email` column and the `country` column sorting the `email` column by _ASCENDING_ alphabetical order plus limiting the results to 7 rows only:

```
mysql> SELECT email,country FROM basic_info ORDER BY email ASC LIMIT 7;

+---------------------------------------+-------------+ 
| email                                 | country     | 
+---------------------------------------+-------------+ 
| adipiscing@lorem.net                  | Netherlands | 
| erat.semper.rutrum@ipsumCurabitur.com | Sweden      | 
| fermentum.vel@risusDonec.co.uk        | Jersey      | 
| imperdiet.nec.leo@nec.ca              | Hong Kong   | 
| non.cursus@duinec.edu                 | Guatemala   | 
| Proin.sed.turpis@scelerisqueneque.ca  | Pakistan    | 
| sed.pede@nisi.com                     | Kiribati    | 
+---------------------------------------+-------------+ 
7 rows in set (0.00 sec) 
```

Do you have what it takes to complete a challenge on ordering and limiting database queries? Go to the next section.