### The MySQL command line interface tools

The terminal window is equipped with _MySQL_.

_MySQL_ is an open source implementation of a _relational database management system_ which contains the database server and client command line application that let us run SQL commands directly on the command line interface.

Use the MySQL client by executing the following command in the terminal window:

```
mysql
```

You should then see this:

```markdown
Welcome to the MariaDB monitor.  Commands end with ; or \g.
...

MariaDB [(none)]> 
```

|||info

### Why MariaDB instead of MySQL?
MySQL was acquired by Oracle. MariaDB is an open source technology created "to ensure that the MySQLcode based would be free forever"

MariaDB is compatible with the MySQLprotocol.

|||


From the client, SQL commands allow us to (among other things):

- Define where and how data is stored (CREATE, ALTER, DROP, RENAME)
- Manipulate the data (SELECT, INSERT, UPDATE, DELETE)
- Control the access to the data (GRANT, REVOKE)

---

Head to the next section to understand more about SQL server and client.