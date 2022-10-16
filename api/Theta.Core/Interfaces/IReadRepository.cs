public interface IReadRepository<T> where T : class, IAggregatedRoot
{
    Task<IEnumerable<T>> Search(string keyword, int limit = 100);
}
