namespace API.Data.Entities
{
    public class Call
    {
        public int Id { get; set; }
        public int RegistrId { get; set; }
        public Registr?  Registr { get; set; }
        public int CustomerId { get; set; }
        public  Customer? Customer { get; set; }
        public DateTime DateTime { get; set; }
        public string  Theme { get; set; }
        public string Feedback { get; set; }
    }
}
