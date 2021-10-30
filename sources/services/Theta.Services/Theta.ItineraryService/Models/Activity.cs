using System;

namespace Theta.ItineraryService.Models
{
    public class Activity
    {
        public int Id { get; set; }

        public DateTime? From { get; set; }

        public DateTime? To { get; set; }

        public Location Location { get; set; }

        public string[] Tags { get; set; }

        public string Description { get; set; }
    }
}
