#!/bin/bash
# Must match for erasing history
QCOUNT=3

# Run test
function test_command {
	(( COUNT ++ ))
	if [[ $COUNT -le $QCOUNT ]]; then
		case $COUNT in
      1 )
				expect_commands "Use the people database" "USE people;" "use people;"
				;;
			2 )
				expect_commands "Display the surname column from the 'names' table." "SELECT surname FROM names;" "select surname from names;"
				;;
			3 )
				expect_commands "Query only the 'name' and 'id' columns of the 'names' table and sort the results by descending order." "SELECT name,id FROM names ORDER BY id DESC;" "SELECT id,name FROM names ORDER BY id DESC;" "select name,id from names order by id desc;" "select id,name from names order by id desc;"
				;;			
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command