public class Activity : BaseEntity
{
    public string Name { get; set; } = null!;
    public DateTime? StartTime { get; set; }
    public DateTime? EndTime { get; set; }
    public Place? Place { get; set; }
    public IEnumerable<string> Tags { get; set; } = new List<string>();
}
