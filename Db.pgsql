CREATE TABLE "Registr"(
    "Id" INTEGER Primary Key UNIQUE NOT NULL,
    "FirstName" VARCHAR(30) NOT NULL,
    "LastName" VARCHAR(30) NOT NULL,
    "Speciality" VARCHAR(20)NOT NULL
);

CREATE TABLE "WorkHours"(
    "Id" INTEGER PRIMARY KEY,
    "EmployeeId" INTEGER,
    "Date" CURRENT_DATE,
    "StartDate" TIME,
    "EndDate" TIME,
    FOREIGN KEY ("EmployeeId") REFERENCES  "Registr"("Id") ON DELETE SET NULL
);

CREATE TABLE "Balance"(
    "Year" INTEGER PRIMARY KEY,
    "Profit" INTEGER,
    "Spend" CURRENT_DATE,
    "Tax" TIME,
    "NetProfit" TIME,
);


CREATE TABLE "Customers"(
    "Id" INTEGER PRIMARY KEY,
    "FirstName" VARCHAR,
    "SecondName" VARCHAR,
    "Address" VARCHAR,
    "Phone" VARCHAR,
);


CREATE TABLE "Calls"(
    "Id" INTEGER PRIMARY KEY,
    "CustomerId" INTEGER,
    "EmployeeId" INTEGER,
    "DateTime" TIMESTAMP,
    "Theme" VARCHAR,
    "Feedback" VARCHAR,

    FOREIGN KEY ("EmployeeId") REFERENCES  "Registr"("Id") ON DELETE SET NULL,
    FOREIGN KEY ("CustomerId") REFERENCES  "Customerss"("Id") ON DELETE SET NULL

);
-------------------------------
CREATE TABLE "Registr"(
    "Id" INTEGER Primary Key UNIQUE NOT NULL,
    "FirstName" VARCHAR(30) NOT NULL,
    "LastName" VARCHAR(30) NOT NULL,
    "Speciality" VARCHAR(20)NOT NULL
);

CREATE TABLE "WorkHours"(
    "Id" INTEGER PRIMARY KEY,
    "EmployeeId" INTEGER,
    "Date" TIMESTAMP,
    "StartDate" TIME,
    "EndDate" TIME,
    FOREIGN KEY ("EmployeeId") REFERENCES  "Registr"("Id") ON DELETE SET NULL
);

CREATE TABLE "Balance"(
    "Year" INTEGER PRIMARY KEY,
    "Profit" INTEGER,
    "Spend" TIMESTAMP,
    "Tax" TIME,
    "NetProfit" TIME
);


CREATE TABLE "Customers"(
    "Id" INTEGER PRIMARY KEY,
    "FirstName" VARCHAR,
    "SecondName" VARCHAR,
    "Address" VARCHAR,
    "Phone" VARCHAR
);


CREATE TABLE "Calls"(
    "Id" INTEGER PRIMARY KEY,
    "CustomerId" INTEGER,
    "EmployeeId" INTEGER,
    "DateTime" TIMESTAMP,
    "Theme" VARCHAR,
    "Feedback" VARCHAR,

    FOREIGN KEY ("EmployeeId") REFERENCES  "Registr"("Id") ON DELETE SET NULL,
    FOREIGN KEY ("CustomerId") REFERENCES  "Customers"("Id") ON DELETE SET NULL

);
