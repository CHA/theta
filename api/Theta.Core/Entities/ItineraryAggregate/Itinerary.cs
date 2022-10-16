public class Itinerary : BaseEntity, IAggregatedRoot
{
    public string Name { get; set; } = null!;
    public float? Score { get; set; }
    public decimal? EstimatedBudget { get; set; }
    public string? Description { get; set; }
    public IEnumerable<Activity> Activities { get; set; } = Enumerable.Empty<Activity>();
}
