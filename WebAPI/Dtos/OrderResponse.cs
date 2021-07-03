using System;
using WebAPI.Models;

namespace WebAPI.Dtos
{
    public class OrderResponse
    {
        public int Id { get; set; }
        public int OrderdBy { get; set; }
        public string BoughtOn { get; set; }

        public int ProductId { get; set; }
        public int OrderPrice { get; set; }
        public int Quantity { get; set; }
    }
}