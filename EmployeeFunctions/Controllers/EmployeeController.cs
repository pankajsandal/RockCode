using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EmployeeFunctions.Models;
using System.Threading.Tasks;

namespace EmployeeFunctions.Controllers
{
    public class EmployeeController : ApiController
    {

        static IEmployeeInterface _employeeInterface = new EmployeeDAO();

        //public EmployeeController(IEmployeeInterface empInterface)
        //{
        //    if(empInterface== null)
        //    {
        //      throw new ArgumentNullException("repository");
              
        //    }
        //    else
        //    {
        //        _employeeInterface = empInterface;
        //    }
        //}

        //public EmployeeController() 
        //{
        //    if (empInterface == null)
        //    {
        //        throw new ArgumentNullException("repository");

        //    }
        //    else
        //    {
        //        _employeeInterface = empInterface;
        //    }
        //}

       
        public List<EmployeeDetail> GetAllEmployee()
        {
            return _employeeInterface.GetAll();
        }

        public EmployeeDetail GetEmployee(int ID)
        {
            return _employeeInterface.GetEmployee(ID);
        }

        public HttpResponseMessage PostEmployee([FromBody]EmployeeDetail empObject)
        {            
                empObject = _employeeInterface.Create(empObject);            
                var response = Request.CreateResponse<EmployeeDetail>(HttpStatusCode.Created,empObject);
                string uri = Url.Route(null, new { id = empObject.EmployeeID }).ToString();
                response.Headers.Location = new Uri(Request.RequestUri, uri);
                return response; 
            
        }
       
        public void PutEmployee([FromBody]EmployeeDetail empObj)
        {
            if(!_employeeInterface.Update(empObj))
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.NotFound));
            }
        }
     
        public void DeleteEmployee([FromUri]int ID)
        {
            if(!_employeeInterface.Delete(ID))
            {
                throw new HttpResponseException(new HttpResponseMessage(HttpStatusCode.NotFound));
            }
        }


    }
}
