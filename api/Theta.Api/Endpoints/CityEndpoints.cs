public static class CityEndpoints
{
    public static void AddCityEndpoints(this WebApplication app)
    {
        app.MapGet("/cities", Search);
    }

    private static Task<IEnumerable<City>> Search(IReadRepository<City> cityRepository, string keyword, int limit = 100)
    {
        return cityRepository.Search(keyword, limit);
    }
}
