As SQL commands get longer, we need a better way to declare our queries.

`*.sql` files, such as the `people.sql` file we have on the file tree are files that can be read by the `MySQL` command line tool. 

In order to execute a `*.sql` (the asterisk represents any name), navigate into the desired directory with the `cd` _change directories_ command, in this case the `~/workspace` directory, start a `mysql` shell and execute:

```
mysql> source file_name.sql
```

Let's try out the `source` command by selecting only specific data with the _query operators_ in the next section.