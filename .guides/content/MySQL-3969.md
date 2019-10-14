### The MySQL command line interface tools

The terminal window is equipped with _MySQL_.

_MySQL_ is an open source implementation of a _relational database management system_ which contains the database server and client command line application that let us run SQL commands directly on the command line interface.

Use the [MariaDB](https://mariadb.com/) MySQL client by executing the following command in the terminal window:

```
mysql
```

You should then see this:

```
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 42
Server version: 10.4.8-MariaDB-1:10.4.8+maria~bionic-log mariadb.org
 binary distribution

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input
statement.

MariaDB [(none)]>
...

```
From the client, SQL commands allow us to (among other things):

- Define where and how data is stored (CREATE, ALTER, DROP, RENAME)
- Manipulate the data (SELECT, INSERT, UPDATE, DELETE)
- Control the access to the data (GRANT, REVOKE)

---

Head to the next section to understand more about SQL server and client.