#!/bin/bash
QCOUNT=3
sed -i "s@\\\040@ @g" $hist_file

# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
			1 )
				expect_command "USE directory;" "Switch to the directory database"
				;;
      2 )
        expect_command "SHOW TABLES;" "Display the available tables of the directory database"
        ;;
      3 )
        expect_command "SELECT * FROM company_profiles;" "Query all the records from the company_profiles table"
        ;;
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command