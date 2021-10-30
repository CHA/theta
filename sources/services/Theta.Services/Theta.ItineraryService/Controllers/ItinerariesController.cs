using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using Theta.ItineraryService.Models;

namespace Theta.ItineraryService.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItinerariesController : ControllerBase
    {
        private readonly ILogger<ItinerariesController> _logger;

        public ItinerariesController(ILogger<ItinerariesController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Itinerary> Get()
        {
            throw new NotImplementedException();
        }
    }
}
