Start a MySQL shell: 

```
codio ~/workspace $ mysql
```

Display the available databases for the logged in user: 

```
SHOW DATABASES;
```

Switch to a specific database: 

```
USE people;
```

Display the selected database tables: 

```
SHOW TABLES;
```

Display all the rows of one of those tables:

```
SELECT * FROM names;
```

---

In the next section examples we will add to the `SELECT` data manipulation keyword by adding some SQL clauses and operators such as: `WHERE`, `ORDER BY`, `BETWEEN`, `>`, `=`.