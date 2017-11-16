CSIDE PROGRAMMER EVALUATION - RESOLUTION

Name: João Miguel Dias Ferreira Gouveia
Exercises solved: all of them (2, 3, 4, 5, 6)
Programming languages used: HTML, CSS, JavaScript, PHP, MySQL, JSDoc.
Libraries/frameworks/tools used: Bootstrap, Moment.js, jQuery, QUnit, phpMyAdmin, WampServer (Apache).

--- Executing the Programs: Default Method ---

All the programs will be maintained using WampServer, which will regularly be activated and online for
the time being.

To access the programs, go to your browser of choice and copy-paste the following URL:
http://188.83.102.174:8080/cside/

An index page will appear, showing links to the HTML pages relevant to the exercises. Each exercise
has a page dedicated to it, with the exception of exercises 5 and 6, which share the same page
due to how connected they are to each other. While in a page, it is possible to directly access the 
other pages due to the responsive pagination within each page.

--- Executing the Programs: Alternative Method ---

Numerous tests were made to ensure that the default method was as effective as possible. If, in spite
of these tests, the default method proves itself to be ineffective, then the alternative method is
to be performed.

This method consists in copying the "cside" folder and pasting it in a public_html directory
(or a directory similar to WampServer's "www" directory), so that the programs can be executed in the
server the directory is associated with.

However, if this method is to be performed, two key changes must be made:
1. In each URL, change "188.83.102.174:8080" to the hostname of the server that will be used. The
URLs with this information are located in "index.html", as well as each of the "view.html"s for the
pagination.
2. The database exercises 4 to 6 depend on will also have to be relocated to the server of choice. 
For this purpose (and also for viewing the database's source code), a SQL dump (cside.sql) is 
present on the "cside" folder, to be imported on the new server. The "host" variable in
"db_start.php" will also have to change to the new server's hostname.

END