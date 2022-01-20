namespace API.Entities
{
    public class RegularNote
    {
        public int Id { get; set; }
        public string Note { get; set; }
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
    }
}