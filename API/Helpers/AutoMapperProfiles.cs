using API.DTOs;
using API.Entities;
using AutoMapper;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<AppUser, MemberDto>();
            CreateMap<RegularNote, RegularNoteDto>();
            CreateMap<Reminder, ReminderDto>();
            CreateMap<ToDo, ToDoDto>();
            CreateMap<Bookmark, BookmarkDto>();
        }
    }
}
