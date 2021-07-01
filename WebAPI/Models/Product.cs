using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using System.Text.Json.Serialization;

namespace WebAPI.Models
{
    public class Product 
    {   public int Id { get; set; }
        public string Title { get; set; }
        public int Price { get; set; }
        public int Stock { get; set; }
        public string CategoryType { get; set; }
        public string Description { get; set; }
        public string Images { get; set; }
    }
}