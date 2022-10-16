public interface IRepository<T> : IReadRepository<T> where T : class, IAggregatedRoot
{
}
