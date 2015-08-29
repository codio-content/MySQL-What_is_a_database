#!/bin/bash
# Must match for erasing history
QCOUNT=4
sed -i "s@\\\040@ @g" $hist_file

# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
			1 )
				expect_command "SHOW DATABASES;" "Display all the available databases"
				;;
			2 )
				expect_command "USE people;" "Change the database to be 'people'"
				;;
			3 )
				expect_command "SHOW TABLES;" "Display the 'people' database tables"
				;;
			4 )
				expect_command "SELECT * FROM basic_info;" "Select all the records from the basic_info table"
				;;
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command