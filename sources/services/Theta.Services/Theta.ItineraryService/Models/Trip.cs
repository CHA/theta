using System;
using System.Collections.Generic;
using Theta.ItineraryService.Enums;

namespace Theta.ItineraryService.Models
{
    public class Trip
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public User CreatedUser { get; set; }

        public IList<User> Travellers { get; set; }

        public City Origin { get; set; }

        public IList<City> Destinations { get; set; }

        public TripStatus Status { get; set; }

        public DateTime? From { get; set; }

        public DateTime? To { get; set; }

        public Itinerary Itinerary { get; set; }
    }
}
