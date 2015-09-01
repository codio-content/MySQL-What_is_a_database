As SQL commands get longer, we need a better way to declare our queries.

`*.sql` files (the asterisk represents any name), such as the `source-file.sql` file we have on the file tree, are files that can be read by the MySQL command line tool.

Here's a closer look at the `sqlfiles/source-file.sql` content (notice the use of new lines and the ending `;` as well):

```
-- This is how SQL comments are written (just two dashes)

USE people;

SELECT SURNAME FROM names
ORDER BY SURNAME DESC
LIMIT 5;
```

Execute the `source-file.sql` content by typing the following command in the `mysql` shell:

```
mysql> source source-file.sql
```

Let's practice the `source` command by selecting only specific data with the _query operators_ in the next section.