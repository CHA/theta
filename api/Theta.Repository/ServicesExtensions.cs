using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

public static class ServicesExtensions
{
    public static void AddRepositories(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddSingleton<ThetaContext>();
        services.AddScoped<IReadRepository<City>, CityRepository>();
    }
}