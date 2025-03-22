using API.Data.Entities;
using API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;
[ApiController]
[Route("[controller]")]
public class RegistrController
{
    private readonly AppDbContext appDbContext;

    public RegistrController(AppDbContext appDbContext)
    {
        this.appDbContext = appDbContext;
    }

    //rest
    [HttpPost]
    public Registr Create([FromBody] Registr registr)
    {
        appDbContext.Registrs.Add(registr);
        appDbContext.SaveChanges();
        return registr;
    }
    [HttpGet]
    public List<Registr> GetAll()
    {
        return appDbContext.Registrs.Include(x=>x.WorkHours).ToList();
    }
    [HttpPut]
    public Registr Update([FromBody] Registr registr)
    {
        appDbContext.Registrs.Update(registr);
        return registr;
    }

    [HttpDelete("{id}")]
    public bool Delete(int id)
    {
        appDbContext.Registrs.Remove(new Registr { Id = id });
        appDbContext.SaveChanges();
        return true;
    }
}
