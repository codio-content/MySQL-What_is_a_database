USE directory;
SELECT * FROM company_profiles WHERE company_name = 'Lorem Ipsum Institute' OR company_name = 'Et LLP';
SELECT id,phone_num FROM company_profiles WHERE id BETWEEN 40 AND 60;
