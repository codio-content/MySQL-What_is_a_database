use directory;

show tables;

select * FROM company_profiles where id = 27;

select phone_num, id from company_profiles ORDER 
by id ASC;

SELECT id,company_name
FROM company_profiles
WHERE id >= 40
LIMIT 5;