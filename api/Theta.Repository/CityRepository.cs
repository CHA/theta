using Dapper;

public class CityRepository : IReadRepository<City>
{
    private readonly ThetaContext _context;

    public CityRepository(ThetaContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<City>> Search(string keyword, int limit = 100)
    {
        var query = @$"SELECT
                        c.id,
                        c.name,
                        c.lat,
                        c.lng,
                        c.country,
                        c.iso2,
                        c.iso3,
                        c.created_by AS CreatedBy,
                        c.created_date AS CreatedDate,
                        c.last_updated_by AS LastUpdatedBy,
                        c.last_updated_date AS LastUpdatedDate,
                        c.is_deleted
                    FROM cities c
                    WHERE c.name ILIKE '{keyword}%'
                        OR c.iso2 ILIKE '{keyword}%'
                        OR c.iso3 ILIKE '{keyword}%'
                    LIMIT {limit}";

        using var conn = _context.CreateConnection();
        conn.Open();
        var result = await conn.QueryAsync<City>(query);
        return result;
    }
}
