#!/bin/bash
QCOUNT=3


# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
			1 )
				expect_commands "Switch to the directory database" "USE directory;" "use directory;"
				;;
      2 )
        expect_commands "Display the available tables of the directory database" "SHOW TABLES;" "show tables;"
        ;;
      3 )
        expect_commands "Query all the records from the company_profiles table" "SELECT * FROM company_profiles;" "select * from company_profiles;"
        ;;
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command