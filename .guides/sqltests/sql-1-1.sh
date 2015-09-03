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
				expect_commands "Display all the available databases" "SHOW DATABASES;" "show databases;"
				;;
			2 )
				expect_commands "Change the database to be 'people'" "USE people;" "use people;"
				;;
			3 )
				expect_commands "Display the 'people' database tables" "SHOW TABLES;" "show tables;"
				;;
			4 )
				expect_commands "Select all the records from the basic_info table" "SELECT * FROM basic_info;" "select * from basic_info;"
				;;
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command