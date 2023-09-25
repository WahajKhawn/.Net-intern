using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using Project1.Models;

namespace T1.Controllers
{
    public class EmployeeController : Controller
    {

        // GET: Employee
        public empEntities dbemp = new empEntities();

        public ActionResult Creating()
        {

            return View();
        }
        public ActionResult listEmployee()
        {
            return View();
        }


        public string AddEmployee(string empName, string empEmail, int empAge, string empAddress, int fkdeptid)
        {
            dbemp.sp_listemp(empName, empEmail, empAge, empAddress, fkdeptid);

            /* Employee a = new Employee();

             a.employeeName = empName;
             a.email = empEmail;
             a.age = empAge;
             a.Address = empAddress;
             a.FKDept_ID = fkdeptid;
             a.createdBy = 2;
             a.createdOn = DateTime.Now;

             dbemp.Employees.Add(a);
             dbemp.SaveChanges();*/
            return "Record saved successfully";
        }
        public string FetchEmployee()
        {
            var result = dbemp.sp_deptdropdown();
            return new JavaScriptSerializer().Serialize(result);
        }
        public string Getemplist()
        {
            var result = dbemp.sp_getemplist();
            return new JavaScriptSerializer().Serialize(result);
        }
        public string Deleteemplist(int empid)
        {
            dbemp.sp_deleteemp(empid);
            return "Deleted successfully";
        }
        public ActionResult Edit (int id)
        {
            ViewBag.idemp = id;
            return View("Creating");
        }

        /*public string Editemplist(int empids, string empName, string empemail, int empAge, string empAddress, int fkdeptid)
        {
            dbemp.editemplist(empids, empName, empemail, empAge, empAddress, fkdeptid);

            return View("Creating");
        }
       public ActionResult Edit(int empids)
        {
            //var employee = db.EMPLOYEEs.FirstOrDefault(x => x.PK_EMPLOYEE_ID == id);
            //var emp = Employee.Where(x => x.employee_ID == empid).FirstOrDefault();
            var emp = dbemp.Employees.FirstOrDefault(x => x.employee_ID == empids);
            return View(emp);
        }

        [HttpPost]
        public ActionResult Edit(Employee emp)
        {
            //update student in DB using EntityFramework in real-life application

            //update list by removing old student and adding updated student for demo purpose

            var empl = dbemp.Employees.FirstOrDefault(x => x.employee_ID == emp.employee_ID);
            Employee.Remove(empl);
            Employee.Add(emp);

            return RedirectToAction("Creating");
        }*/
    }
}


