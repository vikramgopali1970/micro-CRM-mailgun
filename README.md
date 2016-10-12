**# SAMPLE MICRO-CRM TO CREATE LIST OF USERS AND SEND THEM EMAILS USING MAILGUN #**


A simple MEAN Stack based webapp to create a list of users based on some criteria and send them emails in BULK. 

HERE IS HOW TO RUN THIS:

1) Install Node.js from this link 
        <https://nodejs.org/en/download/>

2) Clone this Project
        <git clone https://vikram_gopali@bitbucket.org/vikram_gopali/micro-crm.git>

3) Install Dependencies
        <npm install>

4) Run the Project
        <node app.js>

5) Go to http://localhost:3020/ in browser



FEATURES IMPLEMENTED:

* Pre defined list of users classified based on category to send the mail.
* Option to create a list based on a category.
* Before sending the mail, Edit the message body for custom message.
* Delete a List.



OTHERS:

* Inorder to set the list Layout, used MASONRY
        ->http://masonry.desandro.com/
* BootStrap CSS
        ->http://getbootstrap.com
* Get BootStrap for models
        ->http://getbootstrap.com/
* Ionicons
        ->http://ionicons.com/>http://ionicons.com/


Please Find below the screenshots of the webapp:

This is a **dashBoard** where all the saved lists are populated:

![dashboard.PNG](https://bitbucket.org/repo/dqRd7L/images/1635579244-dashboard.PNG)


this is the option to **edit the message body** while sending the mail:

![sendMail.PNG](https://bitbucket.org/repo/dqRd7L/images/325782838-sendMail.PNG)

this is the **create list view** before inserting the users:

![createlist initialView.PNG](https://bitbucket.org/repo/dqRd7L/images/3978724389-createlist%20initialView.PNG)

this is how the app **dynamically populates the users into specific category** of list while adding users, we can save each list seperatly:

![createlist final.PNG](https://bitbucket.org/repo/dqRd7L/images/880827941-createlist%20final.PNG)


this is the **pop-up** for confirming of save list:

![savelist pop-up.PNG](https://bitbucket.org/repo/dqRd7L/images/2576168724-savelist%20pop-up.PNG)

**save** list icon:

![save icon.png](https://bitbucket.org/repo/dqRd7L/images/670481591-save%20icon.png)



the **airplane** icon for sending mail and the **trash** icon for deleting the list:

![send mail and delete.png](https://bitbucket.org/repo/dqRd7L/images/1946753286-send%20mail%20and%20delete.png)