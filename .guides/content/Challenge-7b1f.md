{Check It!|assessment}(test-3292589540)

|||guidance
# Correct answer:

The `directory.sql` file should match the following content:

```
USE directory;
SHOW TABLES;
SELECT * FROM company_profiles WHERE id = 27;
SELECT id,phone_num FROM company_profiles ORDER BY id ASC;
SELECT id,company_name FROM company_profiles WHERE id >= 40 LIMIT 5;
```

|||