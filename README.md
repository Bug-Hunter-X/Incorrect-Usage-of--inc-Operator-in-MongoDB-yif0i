# Incorrect Usage of $inc Operator in MongoDB
This repository demonstrates a common error when using the `$inc` operator in MongoDB to increment a field's value. The `$inc` operator is designed to increment numerical fields.  However, incorrect usage can lead to unexpected results, particularly when dealing with data types other than numbers or when the target field does not exist in the document.

## Bug Description
The bug showcases an incorrect implementation of `$inc` where the target field either doesn't exist or has an unexpected data type, causing the operation to fail silently or produce unintended consequences.

## Solution
The solution demonstrates the correct approach which involves checking for the field's existence and data type before applying the `$inc` operator.  This approach ensures data integrity and avoids potential errors.
