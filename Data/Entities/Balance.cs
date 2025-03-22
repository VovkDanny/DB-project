using System.ComponentModel.DataAnnotations;

namespace API.Data.Entities
{
    public class Balance
    {
        [Key]
        public int Year { get; set; }
        public double Profit { get; set; }
        public double Spend { get; set; }
        public double Tax { get; set; }
        public double NetProfit { get; set; }
    }
}
