#!/bin/bash
QCOUNT=7
sed -i "s@\\\040@ @g" $hist_file

# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
			1 )
				expect_command "SHOW DATABASES;"
				;;
      2 )
        expect_command "SHOW TABLES;"
        ;;
      3 )
        expect_command "SELECT * FROM company_profiles;"
        ;;
      4 )
        expect_command "SELECT * FROM company_profiles LIMIT 5;"
        ;;
      5 )
        expect_command "SELECT id,company_name FROM company_profiles ORDER BY id DESC;"
        ;;
      6 )
        expect_command "SELECT * FROM company_profiles WHERE company_name = 'Lorem Ipsum Institute' OR company_name = 'Et LLP';"
        ;;
      7 )
        expect_command "SELECT id,phone_num FROM company_profiles WHERE id BETWEEN 40 AND 60;"
        ;;
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command