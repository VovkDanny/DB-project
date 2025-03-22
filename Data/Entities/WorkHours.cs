using Newtonsoft.Json;

namespace API.Data.Entities
{
    public class WorkHours
    {
        public int Id { get; set; }
        public int RegistrId { get; set; }
        public Registr? Registr { get; set; }
        public DateTime Date { get; set; }
        [JsonConverter(typeof(TimeOnlyJsonConverter))]
        public TimeOnly WorkStart{ get; set; }
        [JsonConverter(typeof(TimeOnlyJsonConverter))]
        public TimeOnly WorkEnd { get; set; }
    }
}
