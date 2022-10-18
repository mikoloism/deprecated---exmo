**DEPRECATED on `Oct 18 2022`**

<!--
# no-name ![please, wait...](https://img.shields.io/static/v1?label=&message=please%2C+wait...&color=d82)

functional way to connecto to database;
support (mongodb and mysql)

## SNIPPET

> this **snippet** not available at now, but i try to create it! 👍
> NOTE: every `table` is `collection` 😉

-   **codes**
    -   **import/require module**
        ```javascript
        const db = require('ExMo')('database-name'); // importing/use database
        ```
    -   **select/use table**
        ```javascript
        db('table-name');
        ```
    -   **Tables**
        -   **drop table**
            ```javascript
            db('table-name').drop();
            ```
        -   **create table (without _schema_, empty table)**
            ```javascript
            db('table-name').create();
            ```
        -   **create table (with **schema**)**
            ```javascript
            const schema = {...};
            db('table-name').create(schema);
            ```
        -   **rename table**
            ```javascript
            db('table-name').rename('new-name');
            ```
    -   **Data/Row/Field**
        ```javascript
        /** response of all method's
         * 1 = successfully
         * 0 = field
         * -1 = row-not-exist
         */
        ```
        -   **insert data to table**
            ```javascript
            db('table-name').insert({...});
            ```
        -   **remove data from table**
            ```javascript
            db('table-name').remove({ where: ... });
            ```
        -   **update data on table**
            ```javascript
            db('table-name').update({ old: ..., new: ..., where: ... });
            ```
        -   **get/fetch data from table**
            ```javascript
            const data = db('table-name').fetch(); // get all row from table
            const data = db('table-name').select({ where: ... }); // get several/many row from table
            ```
    -   **Table (Objected)**
        -   **create object**
            ```javascript
            const table = db('table'); // NOTE: `table` should be exist :danger:
            ```
        -   **operations**
            ```javascript
            table.drop();
            table.rename('new-name');
            table.insert({...});
            table.remove({...});
            table.update({...});
            table.fetch();
            table.select();
            ```

## Thanks for Help me 🤗

thanks anyone to help me and every people when use of mongodb and mongoose to node-js/express-js for growing up and updating this project 🥇

💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮 💮

-->
