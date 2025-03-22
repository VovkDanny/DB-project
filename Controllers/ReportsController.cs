using API.Data;
using API.Data.Entities;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReportsController :ControllerBase
    {
        private readonly AppDbContext dbContext;

        public ReportsController(AppDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        [HttpGet("CallsByRegistr")]
        public ActionResult GetCalls()
        {
            return Ok(dbContext.Calls
                .Include(call => call.Registr)
                .GroupBy(x=>x.Registr.Id)
                .Select(x => new
                {
                    Name = dbContext.Registrs.First(y=>y.Id == x.Key).FirstName,
                    Count= x.Count()

                }));

        }
        [HttpGet("RegistrBySpeciality")]
        public ActionResult GetBySpeciality()
        {
            return Ok(dbContext.Registrs
                .GroupBy(x => x.Speciality)
                .Select(x => new
                {
                    Name = x.Key,
                    Count = x.Count()

                }));

        }
    }
}
