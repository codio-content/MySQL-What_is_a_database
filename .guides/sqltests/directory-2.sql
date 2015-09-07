USE directory;
SHOW TABLES;
SELECT * FROM company_profiles WHERE id = 27;
SELECT phone_num,id FROM company_profiles ORDER BY id ASC;
SELECT company_name,id FROM company_profiles WHERE id >= 40 LIMIT 5;