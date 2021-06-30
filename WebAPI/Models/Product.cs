using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Product
    {
        public int Id { get; set; } 
        public string Title { get; set; }
        public int Price { get; set; }
        public int Stock { get; set; }
        public CategoryType CategoryType { get; set; }
        public Description Description { get; set; }
        public ICollection<Photo> Images { get; set; }
    }
}