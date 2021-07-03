namespace WebAPI.Dtos
{
    public class RegisterReqDto
    {
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string PasswordKey { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string Tara { get; set; }
        public string Judet { get; set; }
        public string Oras { get; set; }
        public string Strada { get; set; }
        public int Numar { get; set; }
        public string Pfp { get; set; }
    }
}