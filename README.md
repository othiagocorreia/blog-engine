<h1 align="center">BLOG ENGINE ⚙️</h1>

<h4 align="init">An API built with NodeJS and Sequelize to serve as a blog engine where people can register users and make posts</h4>

About 
=============
* [Objective](https://github.com/thiagodk0/blog-engine#-objective)
* [Packages](https://github.com/thiagodk0/blog-engine#-packages)
* [How to use](https://github.com/thiagodk0/blog-engine#)
* [Technologies](https://github.com/thiagodk0/blog-engine#-technologies)

# 🎯 Objective
This project was made for me to learn about how Sequelize and NodeJS can work together and can apply the MVC architecture in my first API project. The API must be able to do all the CRUD methods with users and let them make the same with their posts

# 📦 Packages
To run this project, you will need the following packages: 

* In your terminal run
    
    * **Express**
    
        ``` npm install express ```
        
    * **Nodemon**
    
        ``` npm install nodemon ```
   
   *  **Sequelize**
   
        ``` npm isntall sequelize ```
        
   *  **Sequelize-cli**

        ``` npm install sequelize-cli ```
   *  **MySQL 2**

        ``` npm install mysql2 ```

    
# 🔨 How to Use

1. Make a clone of this project with ``` git clone ```

2. Enter the blog-engine folder

3. Install all the dependencies 

4. Modify the credencials of the database file in the config folder 

5. Run ``` npx sequelize db: create ``` to create the database

6. Run ``` npx sequelize db:migrate ``` to make the migrations

7. Run ``` npx sequelize db:seed:all ``` to populate the database 

# 👾 Technologies

* [Express](https://expressjs.com/)
* [Sequelize](https://sequelize.org/)

# 🔒 Status
🥂 Finished 🥂
