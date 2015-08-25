Tables in a database can be linked to one another usign a PRIMARY KEY.

Let's understand how a table can be related to another table by actually executing some SQL commands!

### The MySQL command line interface tools

The terminal window is equipped with _MySQL_. 
_MySQL_ is a program that let us run SQL commands directly on the command line interface. 

These commands allow us to (among other things):

- Define where and how data is stored (CREATE, ALTER, DROP, rename)
- Manipulate the data (SELECT, INSERT, UPDATE, DELETE)
- Control the access to the data (GRANT, REVOKE)

Click on the terminal window and start the `mysql` interactive screen:

```
# Press enter after you've typed the command:
mysql
```

Are you seeing this prompt as well?: 

```
Welcome to the MySQL monitor.  Commands end with ; or \g.
...

mysql> 
```

---

Let's list the existing databases in the next section.