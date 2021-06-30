using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Description :BaseEntity
    {
        [Required]
        public string Name { get; set; }
    }
}