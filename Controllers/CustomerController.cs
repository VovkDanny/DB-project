using API.Data.Entities;
using API.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly AppDbContext appDbContext;

        public CustomerController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        //rest
        [HttpPost]
        public Customer Create([FromBody] Customer customer)
        {
            appDbContext.Customers.Add(customer);
            appDbContext.SaveChanges();
            return customer;
        }
        [HttpGet]
        public List<Customer> GetAll()
        {
            return appDbContext.Customers.ToList();
        }
        [HttpPut]
        public Customer Update([FromBody] Customer customer)
        {
            appDbContext.Customers.Update(customer);
            return customer;
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            appDbContext.Customers.Remove(new Customer { Id = id });
            appDbContext.SaveChanges();
            return true;
        }
    }
}
