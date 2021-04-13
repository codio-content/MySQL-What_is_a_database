In order to display some data, we first need to _change into_ the database by executing:

```
MariaDB [(none)]> USE people;
```
And you should see this:
```
Database changed
```

We are now inside the `people` database.

List the existing tables by executing: 

```
MariaDB [(none)]> SHOW TABLES;
```
And you should see this:
```
+------------------+ 
| Tables_in_people | 
+------------------+ 
| basic_info       | 
| names            | 
+------------------+ 
2 rows in set (0.00 sec)
```

The `people` database has two existing tables: `basic_info` and `names`. 

- Can you guess what kind of information we are storing in the `people` database?
- What applications could the _names_ and *basic_info* data may serve?