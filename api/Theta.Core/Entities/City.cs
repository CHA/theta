public class City : BaseEntity, IAggregatedRoot
{
    public string Name { get; set; } = null!;
    public decimal? Lat {get;set;}
    public decimal? Lng {get;set;}
    public string Country { get; set; } = null!;
    public string Iso2 {get;set;} = null!;
    public string Iso3 {get;set;} = null!;
}
