using API.Data;
using API.Data.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BalanceController
    {
        private readonly AppDbContext appDbContext;

        public BalanceController(AppDbContext appDbContext)
        {
            this.appDbContext = appDbContext;
        }

        //rest
        [HttpPost]
        public Balance Create([FromBody]Balance balance)
        {
            appDbContext.Balances.Add(balance);
            appDbContext.SaveChanges();
            return balance;
        }
        [HttpGet]
        public List<Balance> GetAll()
        {
            return appDbContext.Balances.ToList();
        }
        [HttpPut]
        public Balance Update([FromBody] Balance balance)
        {
            appDbContext.Balances.Update(balance);
            return balance;
        }

        [HttpDelete("{id}")]
        public bool Delete(int id)
        {
            appDbContext.Balances.Remove(new Balance { Year = id });
            appDbContext.SaveChanges();
            return true;
        }

    }
}
