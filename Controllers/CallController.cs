using API.Data;
using API.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CallController:ControllerBase
    {
        private readonly AppDbContext appDbContext;

        public CallController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        [HttpPost]
        public Call Create([FromBody] Call call)
        {
            call.DateTime = call.DateTime.ToUniversalTime();
            appDbContext.Calls.Add(call);
            appDbContext.SaveChanges();
            return call;
        }
        [HttpGet]
        public List<Call> GetAll()
        {
            return appDbContext.Calls.Include(x=>x.Customer).Include(x=>x.Registr).ToList();
        }
        [HttpPut]
        public Call Update([FromBody] Call call)
        {
            appDbContext.Calls.Update(call);
            return call;
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            appDbContext.Calls.Remove(new Call { Id = id });
            appDbContext.SaveChanges();
            return true;
        }
    }
}
