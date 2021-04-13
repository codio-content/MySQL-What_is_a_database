#!/bin/bash

# start on container startup checks the database existance 
# and prepopulate database

SAMPLE_DATA_DIR=/home/codio/workspace/.guides/sample-data
for NAME in "people" "directory"
do
  DATA=${SAMPLE_DATA_DIR}/${NAME}.sql
  DATABASE="${NAME}"

  if ! [ `mysqlshow ${DATABASE} 2> /dev/null` ]; then
    mysql < ${DATA}
  fi
done
