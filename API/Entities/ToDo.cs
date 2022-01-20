using System;

namespace API.Entities
{
    public class ToDo
    {
        public int Id { get; set; }
        public string Note { get; set; }
        public DateTime Remind { get; set; }
        public bool IsCompleted { get; set; }
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
    }
}