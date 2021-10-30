using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Theta.ItineraryService.Models
{
    public class Destination
    {
        public City City { get; set; }
        public Itinerary Itinerary { get; set; }

    }
}
