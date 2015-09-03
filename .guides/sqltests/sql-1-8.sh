#!/bin/bash
QCOUNT=2
sed -i "s@\\\040@ @g" $hist_file

# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
      1 )
        expect_commands "Select all the company_profiles records where company_name is equal to Lorem Ipsum Institute or Et LLP;" "SELECT * FROM company_profiles WHERE company_name = 'Lorem Ipsum Institute' OR company_name = 'Et LLP';" "select * from company_profiles where company_name = 'Lorem Ipsum Institute' or company_name = 'Et LLP';"
        ;;
      2 )
        expect_commands "Finally, select only the id and phone_num attributes of the company_profiles table and get the records where the id is between 40 and 60" "SELECT id,phone_num FROM company_profiles WHERE id BETWEEN 40 AND 60;" "select id,phone_num from company_profiles where id between 40 and 60;" "SELECT phone_num,id FROM company_profiles WHERE id BETWEEN 40 AND 60;" "select phone_num,id from company_profiles where id between 40 and 60;"
        ;;
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command