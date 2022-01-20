using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
    [Table("Reminders")]
    public class Reminder
    {
        public int Id { get; set; }
        public string Note { get; set; }
        public DateTime Remind { get; set; }
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
    }
}