using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeFunctions.Models
{
    public class EmployeeDAO: IEmployeeInterface
    {
        EmployeeDataModelDataContext db = new EmployeeDataModelDataContext();
        public List<EmployeeDetail> GetAll()
        {
            try
            {
                List<EmployeeDetail> empList = db.EmployeeDetails.ToList();
                return empList;
            }
            catch (Exception)
            {
                throw new NotImplementedException();
            }
            
        }

        public EmployeeDetail GetEmployee(int ID)
        {
            EmployeeDetail empObj = db.EmployeeDetails.Where(w => w.EmployeeID == ID).FirstOrDefault();
            return empObj;
        }

        public EmployeeDetail Create(EmployeeDetail empObj)
        {
            db.EmployeeDetails.InsertOnSubmit(empObj);
            db.SubmitChanges();
            return empObj;
            
        }

        public bool Update(EmployeeDetail empObj)
        {
            EmployeeDetail emp = db.EmployeeDetails.Where(w => w.EmployeeID == empObj.EmployeeID).Single();
            emp.Name = empObj.Name;
            emp.DOB = empObj.DOB;
            emp.Dept = empObj.Dept;
            db.SubmitChanges();
            return true;
        }

        public bool Delete(int ID)
        {
            EmployeeDetail empObj = db.EmployeeDetails.Where(w => w.EmployeeID == ID).Single();
            db.EmployeeDetails.DeleteOnSubmit(empObj);
            db.SubmitChanges();
            return true;
        }


        //EmployeeDetail IEmployeeInterface.Create(EmployeeDetail empObj)
        //{
        //    throw new NotImplementedException();
        //}
    }
}