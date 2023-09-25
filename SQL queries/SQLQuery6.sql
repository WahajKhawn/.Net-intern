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

	
