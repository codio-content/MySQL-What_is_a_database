#!/bin/bash
# Must match for erasing history
QCOUNT=1


# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
			1 )
				expect_file_match "Write each of the tasks in a new line. Are you using capitalized SQL keywords?" "${SQL}/sqltests/SQL1/directory.sql" "${SQL}/CodioSQL.Units/sql1/.guides/sqltests/directory.sql" "${SQL}/CodioSQL.Units/sql1/.guides/sqltests/directory-2.sql"
				;;	
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command