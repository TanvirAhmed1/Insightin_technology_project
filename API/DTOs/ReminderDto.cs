using System;

namespace API.DTOs
{
    public class ReminderDto
    {
        public int Id { get; set; }
        public string Note { get; set; }
        public DateTime Remind { get; set; }
    }
}