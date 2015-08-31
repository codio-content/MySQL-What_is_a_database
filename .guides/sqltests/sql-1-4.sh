#!/bin/bash
# Must match for erasing history
QCOUNT=2
sed -i "s@\\\040@ @g" $hist_file

# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
			1 )
				expect_file_match "Write each of the tasks in the query-operators.sql file" "/home/codio/workspace/query-operators.sql" "/home/codio/workspace/.guides/sqltests/query-operators.sql"
				;;
      2 )
        expect_command "SELECT id,SURNAME FROM names ORDER BY SURNAME DESC;" "Select the id and SURNAME columns of the names table and sort the results by SURNAME in descending order"
        ;;
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command