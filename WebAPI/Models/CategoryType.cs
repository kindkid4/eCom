using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class CategoryType : BaseEntity
    {
        [Required]
        public string Name { get; set; }
    }
}