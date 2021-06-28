using System;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public class Product
    {
        public int Id { get; set; } 
        public string Name { get; set; }
        [Required]
        public string Model { get; set; }
        public DateTime LastUpdateOn { get; set; }
        public int LastUpdatedBy {get;set;}
    }
}