using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using WebAPI.Models;

namespace WebAPI.Dtos
{
    public class ProductDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Price { get; set; }
        public int Stock { get; set; }
        public string CategoryType { get; set; }
        public string Description { get; set; }
        public string Images { get; set; }
        public string PrimaryImage { get; set; }

    }
}