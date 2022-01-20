using System;
using System.Collections.Generic;

namespace API.Entities
{
    public class AppUser
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string Email { get; set; }
        public DateTime DateOfBirth { get; set; }
        public ICollection<RegularNote> RegularNotes { get; set; }
        public ICollection<Reminder> Reminders { get; set; }
        public ICollection<ToDo> ToDos { get; set; }
        public ICollection<Bookmark> Bookmarks { get; set; } 
    }
}
