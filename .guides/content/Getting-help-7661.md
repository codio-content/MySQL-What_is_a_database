Codio's SQL project is going to cover the necessary commands and concepts in order to get you up and running with the SQL database management language, however the `help` command may work as an aid when working directly in the MySQL command line interface. 

Get SQL _help_ by executing: 

```
mysql> help contents;
```

After executing the aforementioned command, a list of concepts is displayed:

```
You asked for help about help category: "Contents"
For more information, type 'help <item>', where <item> is one of the following
categories:
   Account Management
   Administration
   Compound Statements
   Data Definition
   Data Manipulation
   ...
```

For example, to get information about the `SELECT` _data manipulation keyword_ you'd type: 

```
mysql> help Data Manipulation;  # Works in lowercase too
mysql> help SELECT;
```