using System.Collections.Generic;

namespace Theta.ItineraryService.Models
{
    public class Itinerary
    {
        public int Id { get; set; }

        public User User { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public IList<Activity> Activities { get; set; }

        public string[] Tags { get; set; }
        
    }
}
