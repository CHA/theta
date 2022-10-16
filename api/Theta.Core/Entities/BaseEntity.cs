using System;

public abstract class BaseEntity
{
    public virtual int Id { get; protected set; }
    public string? CreatedBy { get; protected set; }
    public DateTime? CreatedDate { get; protected set; }
    public string? LastUpdatedBy { get; protected set; }
    public DateTime? LastUpdatedDate { get; protected set; }
    public bool IsDeleted {get; protected set; }
}
