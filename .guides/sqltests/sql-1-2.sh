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
				expect_commands "Display the SURNAME column from the 'names' table." "SELECT SURNAME FROM names;" "select SURNAME from names;"
				;;
			2 )
				expect_commands "Query only the 'NAME' and 'id' columns of the 'names' table and sort the results by descending order." "SELECT NAME,id FROM names ORDER BY id DESC;" "SELECT id,NAME FROM names ORDER BY id DESC;" "select NAME,id from names order by id desc;" "select id,NAME from names order by id desc;"
				;;			
		esac
	else		
		echo -e "Well done!"
		return 0
	fi
}


test_command