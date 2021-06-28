using System.ComponentModel.DataAnnotations;

namespace WebAPI.Dtos
{
    public class ProductDto
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is mandatory field.")]
        [StringLength(15,MinimumLength = 5)]
        [RegularExpression(".*[a-zA-Z]+.*",ErrorMessage ="Only Numerics are not allowed")]
        public string Name { get; set; }
        [Required]
        public string Model { get; set; }
    }
}