using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeFunctions.Models
{
    public interface IEmployeeInterface
    {
        List<EmployeeDetail> GetAll();
        EmployeeDetail GetEmployee(int ID);
        EmployeeDetail Create(EmployeeDetail empObj);
        bool Update(EmployeeDetail empObj);
        bool Delete(int ID);

    }
}
