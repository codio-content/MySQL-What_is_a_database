#!/bin/bash
# Must match for erasing history
QCOUNT=1


# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
			1 )
				expect_file_match "Write each of the tasks in the query-operators.sql file" "/home/codio/workspace/query-operators.sql" "/home/codio/workspace/.guides/sqltests/query-operators.sql"
				;;
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command