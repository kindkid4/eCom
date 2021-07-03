using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class Order
    {
        public int Id { get; set; }
        public int OrderdBy { get; set; }
        public string BoughtOn { get; set; }
        public int ProductId { get; set; }
        public int OrderPrice { get; set; }
        public int Quantity { get; set; }
    }
}