#!/bin/bash

#!/bin/bash
for NAME in "people" "directory"
do
  echo "DROP DATABASE ${NAME};" | mysql
done