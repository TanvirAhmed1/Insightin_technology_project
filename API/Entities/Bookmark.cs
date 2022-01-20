﻿namespace API.Entities
{
    public class Bookmark
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public AppUser AppUser { get; set; }
        public int AppUserId { get; set; }
    }
}
