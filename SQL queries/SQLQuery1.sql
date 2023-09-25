CREATE TABLE Employee(
	employee_ID int identity(1,1) Primary key NOT NULL,
	employeeName varchar(30) NOT NULL,
	email varchar(50)  NOT NULL,
	Age int NOT NULL,
	Address varchar(50) NOT NULL,
	createdOn Datetime,
	createdBy varchar(30),
	updatedOn DateTime,
	updatedBy varchar(30),
	isActive tinyint NOT NULL,
	isDeleted tinyint NOT NULL,
   	Unique (email),
	FKdept_ID int Foreign key References Department(dept_ID))
	
	INSERT INTO Employee( employeeName, email,Age,Address,createdOn,createdBy,isActive,isDeleted) VALUES 
	('Wahaj','wahaj@gmail.com',22,'Shadman','2023-05-15 09:21:03','Danish',1,0),
	('Irtaza','irtaza@gmail.com',27,'Johar','2023-05-30 12:01:20','Umar',1,0),
	('Zahoor','zahoor@gmail.com',26,'Thar','2023-05-17 10:32:02','Hammad',1,0),
	('Basit','basit@gmail.com',33,'Sakhi Hassan','2023-06-15 14:01:49','Hammad',1,0)


CREATE TABLE Department(
	dept_ID int identity (1,1) Primary key NOT NULL,
	deptName varchar(30) NOT NULL,
	location varchar(50) NOT NULL,
	createdOn DateTime,
	createdBy varchar(50),
	updatedOn DateTime,
	updatedBy varchar(50),
	isActive tinyint NOT NULL,
	isDeleted tinyint NOT NULL
)

	INSERT INTO Department( deptName, location,createdOn,createdBy,isActive,isDeleted) VALUES
	('Information Technology','BLOCK B','2022-05-15 13:23:01','Hammad',1,0),
	('Orthopedic','BLOCK A','2021-06-05 11:41:49','Adnan',1,0),
	('Emergency','BLOCK C','2022-11-25 13:21:39','Amir',1,0),
	('Security','BLOCK D','2022-06-12 09:51:33','Hammad',1,0)

	CREATE TABLE ROLE (
	Role_ID int identity (1,1) PRimary key NOT NULL,
	Name varchar(50) NOT NULL,
	createdOn DateTime,
	createdBy varchar(50),
	updatedOn DateTime,
	updatedBy varchar(50),
	isActive tinyint NOT NULL,
	isDeleted tinyint NOT NULL,
	FKdept_ID int Foreign key References Department(dept_ID)
	)

	INSERT INTO ROLE (Name,createdOn,createdBy,isActive,isDeleted) VALUES 
	('OPD Consultant','2020-12-01 12:00:12','Danish',1,0),
	('Surgeon','2021-11-29 11:10:19','Danish',1,0),
	('Client Support','2021-04-26 12:40:12','Danish',1,0),
	('Developer','2020-03-11 13:31:15','Danish',1,0)

	SELECT * FROM EMPLOYEE
	SELECT * FROM DEPARTMENT
	SELECT * FROM ROLE