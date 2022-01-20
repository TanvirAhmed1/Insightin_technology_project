using System;
using System.Collections.Generic;

namespace API.DTOs
{
    public class MemberDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        //public DateTime DateOfBirth { get; set; }
        public ICollection<RegularNoteDto> RegularNotes { get; set; }
        public ICollection<ReminderDto> Reminders { get; set; }
        public ICollection<ToDoDto> ToDos { get; set; }
        public ICollection<BookmarkDto> Bookmarks { get; set; }
    }
}
