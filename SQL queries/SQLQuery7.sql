select top 20*	from ApplicationUser
select top 20*	from ApplicationUserRole
select top 20*	from Role
select top 20*  from RoleAccess
select top 20*  from RoleAccessCode
select top 20*  from PageModule
select top 2*  from Page
select top 2*  from PageSection


--username, rolename, pagemodulename, pagename


SELECT DISTINCT
	R.NAME as Rolename, 
	PM.NAME PageModuleName,
	P.NAME PageName,
	AU.NAME username

FROM
	ApplicationUserRole AUR

	INNER JOIN ApplicationUser AU ON AUR.FKApplicationUserID= AU.UID
	INNER JOIN Role R ON AUR.FKRoleID= R.UID
	INNER JOIN RoleAccess RA ON RA.FKRoleID= R.UID
	INNER JOIN RoleAccessCode RAC ON RA.FKRoleAccessCodeID= RAC.UID
	INNER JOIN PageModule PM ON RAC.FKPageModuleID= PM.UID
	INNER JOIN Page P ON RAC.FKPageID = P.UID
	INNER JOIN PageSection PS ON PS.FKPageID=PS.UID

--WHERE R.NAME = 'OPD Consultant'

SELECT DISTINCT	
	AU.NAME username,
	Count(R.NAME) Rolename 

FROM
	ApplicationUserRole AUR

	INNER JOIN ApplicationUser AU ON AUR.FKApplicationUserID= AU.UID
	INNER JOIN Role R ON AUR.FKRoleID= R.UID
	INNER JOIN RoleAccess RA ON RA.FKRoleID= R.UID
	INNER JOIN RoleAccessCode RAC ON RA.FKRoleAccessCodeID= RAC.UID
	INNER JOIN PageModule PM ON RAC.FKPageModuleID= PM.UID
	INNER JOIN Page P ON RAC.FKPageID = P.UID
	INNER JOIN PageSection PS ON PS.FKPageID=PS.UID

	WHERE AU.NAME = 'Dr Masood'
	GROUP BY AU.NAME

SELECT TOP 5* FROM PatientDetail
SELECT TOP 5* FROM Patient
SELECT TOP 5* FROM Gender

SELECT 
	P.NAME PatientName,
	P.CreatedOn CreatedTime

FROM
	PatientDetail PD
	INNER JOIN Patient P ON PD.FKPatientID= P.UID
	INNER JOIN Gender G ON PD.FKGenderID= G.UID

--	WHERE P.CreatedOn BETWEEN '2022-06-01' AND '2023-06-14' AND G.UID=101

--Preferred way to write 
	WHERE CAST(P.CreatedOn as DATE) BETWEEN '2022-06-01' AND '2023-06-14' AND G.UID=101


	





	
	
	
	