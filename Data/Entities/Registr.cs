namespace API.Data.Entities
{
    public class Registr
    {
        public int Id { get; set; }
        public string FirstName{ get; set; }
        public string SecondName{ get; set; }
        public string Speciality { get; set; }
        public List<WorkHours> WorkHours { get; set; } = new();
    }
}
