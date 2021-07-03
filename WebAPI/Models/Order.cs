using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        [ForeignKey("User")]
        public int OrderdBy { get; set; }
        public DateTime BoughtOn { get; set; }
        public User User {get;set;}

        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public Product Product {get;set;}
        public int OrderPrice { get; set; }
    }
}