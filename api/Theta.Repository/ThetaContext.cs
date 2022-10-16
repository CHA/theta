

using System.Data;
using Microsoft.Extensions.Configuration;
using Npgsql;

public class ThetaContext
{
    private readonly IConfiguration _configuration;
    private readonly string _connectionString;
    public ThetaContext(IConfiguration configuration)
    {
        _configuration = configuration ?? throw new ArgumentNullException(nameof(configuration));
        _connectionString = _configuration.GetConnectionString("Theta");
    }

    public IDbConnection CreateConnection()
        => new NpgsqlConnection(_connectionString);
}