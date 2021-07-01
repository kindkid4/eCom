using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using WebAPI.Models;

namespace WebAPI.Dtos
{
    public class ProductDto
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Name is mandatory field.")]
        [StringLength(15,MinimumLength = 5)]
        [RegularExpression(".*[a-zA-Z]+.*",ErrorMessage ="Only Numerics are not allowed")]
        public string Title { get; set; }
        public int Price { get; set; }
        public int Stock { get; set; }
        public string CategoryType { get; set; }
        public string Description { get; set; }
        public string Images { get; set; }
        public string PrimaryImage { get; set; }

    }
}