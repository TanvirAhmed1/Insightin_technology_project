using System;

namespace API.DTOs
{
    public class ToDoDto
    {
        public int Id { get; set; }
        public string Note { get; set; }
        public DateTime Remind { get; set; }
        public bool IsCompleted { get; set; }
    }
}