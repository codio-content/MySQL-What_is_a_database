#!/bin/bash
# Must match for erasing history
QCOUNT=2


# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
			1 )
				expect_commands "Display the SURNAME column from the 'names' table." "SELECT SURNAME FROM names;" "select SURNAME from names;"
				;;
			2 )
				expect_commands "Display only 3 records of the city column from the basic_info table" "SELECT city FROM basic_info LIMIT 3;" "select city from basic_info limit 3;"
				;;			
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command