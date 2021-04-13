As SQL commands get longer, we need a better way to declare our queries.

`*.sql` files (the asterisk represents any name), such as the `source-file.sql` file opened in the left pane, are files that can be read by the MySQL command line tool.

Here's a closer look at the `source-file.sql` content (notice the use of new lines and the ending `;` as well):

```
-- This is how SQL comments are written (just two dashes)

USE people;

SELECT surname FROM names
ORDER BY surname DESC
LIMIT 5;
```

Execute the `source-file.sql` content by typing the following command in the `mysql` shell:

```
MariaDB [(none)]> source source-file.sql
```

|||info
### I closed the file by mistake
Don't worry, you can open the file again just by going back or forth 1 section and get to the current section again.
|||

Let's practice the `source` command by selecting only specific data with the _query operators_ in the next section.