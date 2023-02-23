# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Update Agent model and database schema
#### Acceptance Criteria:

Add a custom_id field to the Agent model and update the database schema accordingly.
The custom_id field should be unique per facility.
The custom_id field should be limited to 50 characters in length.
Existing agents in the database should be assigned a default custom_id based on their internal database id.
Facilities should be able to update the custom_id of an Agent associated with them.
Time/Effort estimate: 4-6 hours

Implementation details:

Create a migration script to update the database schema.
Add a custom_id field to the Agent model and validate it to ensure it meets the requirements.
Write a script to assign default custom_id values to existing agents.
Add an API endpoint for Facilities to update the custom_id of an Agent associated with them.
Ticket 2: Update Shifts table to reference custom_id instead of internal id
Acceptance Criteria:

Modify the Shifts table to reference the custom_id field instead of the internal id field for the associated Agent.
Existing shifts should be updated to reference the corresponding custom_id instead of the internal id.
Ensure that the change does not affect any other functionality of the application.
Time/Effort estimate: 2-3 hours

Implementation details:

Create a migration script to update the Shifts table to reference the custom_id field.
Write a script to update existing shifts to reference the corresponding custom_id.
Ticket 3: Update generateReport function to use custom_id
Acceptance Criteria:

Modify the generateReport function to use the custom_id field of the Agent associated with each Shift.
Ensure that the report generated displays the custom_id of each Agent instead of the internal id.
Ensure that the change does not affect any other functionality of the application.
Time/Effort estimate: 1-2 hours

Implementation details:

Update the generateReport function to use the custom_id field of the Agent associated with each Shift.
Ticket 4: Update API endpoints to support custom_id
Acceptance Criteria:

Update all relevant API endpoints to support custom_id instead of the internal id field for the associated Agent.
Ensure that the API responses return the custom_id of each Agent instead of the internal id.
Ensure that the change does not affect any other functionality of the application.
Time/Effort estimate: 2-4 hours

Implementation details:

Update all relevant API endpoints to use the custom_id field of the Agent.
Update the API responses to return the custom_id of each Agent.
Ticket 5: Update documentation to reflect changes
Acceptance Criteria:

Update all relevant documentation to reflect the changes made in the previous tickets.
Ensure that the documentation is clear and accurate.
Ensure that the change does not affect any other functionality of the application.
Time/Effort estimate: 1-2 hours

Implementation details:

Update all relevant documentation to reflect the changes made in the previous tickets. This includes user guides, API documentation, and developer documentation.


