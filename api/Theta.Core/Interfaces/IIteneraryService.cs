public interface IIteneraryService
{
    Task<Itinerary> Create(Itinerary itinerary);
    Task<IEnumerable<Itinerary>> Search();
}
