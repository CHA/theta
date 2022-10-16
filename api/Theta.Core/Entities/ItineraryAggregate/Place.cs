public class Place : BaseEntity
{
    public string Name { get; private set; } = null!;
    public string Address { get; set; } = null!;
    public string? PostCode { get; set; }
    public Location? Location { get; set; }
}
