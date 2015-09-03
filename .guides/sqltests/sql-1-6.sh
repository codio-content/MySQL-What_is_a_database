#!/bin/bash
QCOUNT=2


# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
      1 )
        expect_commands "Select all the records from the company_profiles table and limit them to 5 rows only" "SELECT * FROM company_profiles LIMIT 5;" "select * from company_profiles limit 5;"
        ;;
      2 )
        expect_commands "Select only the id and the company_name columns from the company_profiles table and sort them by id in descending order" "SELECT id,company_name FROM company_profiles ORDER BY id DESC;" "select id,company_name from company_profiles order by id desc;" "SELECT company_name,id FROM company_profiles ORDER BY id DESC;" "select company_name,id from company_profiles order by id desc;"
        ;;
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command