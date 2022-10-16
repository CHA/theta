public record Location
{
    public float Lat { get; private set; }
    public float Lng { get; private set; }

    public Location(float lat, float lng)
    {
        Lat = lat;
        Lng = lng;
    }
}
