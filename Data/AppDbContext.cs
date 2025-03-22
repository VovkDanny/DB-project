using API.Data.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions dbContextOptions):base(dbContextOptions)
        {
            //Database.EnsureCreated();
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

        }
        public DbSet<Registr> Registrs { get; set; }
        public DbSet<WorkHours> WorkHours{ get; set; }
        public DbSet<Balance> Balances{ get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Call> Calls{ get; set; }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    base.OnConfiguring(optionsBuilder);
        //    //optionsBuilder.UseSqlite("Data source=Service.db");
        //    optionsBuilder.UseNpgsql("Server=localhost;Port=5432;User Id=postgres;Password=postgrespw;Database=Service_1");
        //}
    }
}
