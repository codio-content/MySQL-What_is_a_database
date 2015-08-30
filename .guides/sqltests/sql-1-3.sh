#!/bin/bash
# Must match for erasing history
QCOUNT=1
sed -i "s@\\\040@ @g" $hist_file

# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
			1 )
				expect_file_match "Write each of the tasks in a new line. TIP: The 'USE people' command has its own semicolon." "/home/codio/workspace/people-test.sql" "/home/codio/workspace/.guides/sqltests/people-test.sql"
				;;	
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command