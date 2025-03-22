using API.Data;
using API.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class WorkHoursController : ControllerBase
    {
        private readonly AppDbContext appDbContext;

        public WorkHoursController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }
        [HttpPost]
        public WorkHours Create([FromBody] WorkHours workHours)
        {
            workHours.Date = workHours.Date.ToUniversalTime();
            //workHours.WorkStart = workHours.WorkStart.();
            //workHours.Date = workHours.Date.ToUniversalTime();
            appDbContext.WorkHours.Add(workHours);
            appDbContext.SaveChanges();
            return workHours;
        }
        [HttpGet]
        public List<WorkHours> GetAll()
        {
            return appDbContext.WorkHours.Include(x => x.Registr).ToList();
        }
        [HttpPut]
        public WorkHours Update([FromBody] WorkHours workHours)
        {
            workHours.Date = workHours.Date.ToUniversalTime();
            appDbContext.WorkHours.Update(workHours);
            return workHours;
        }

        [HttpDelete("{id}")]
        public bool Update(int id)
        {
            appDbContext.WorkHours.Remove(new WorkHours { Id = id });
            appDbContext.SaveChanges();
            return true;
        }
    }
}
