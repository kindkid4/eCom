using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    public class Order : BaseEntity
    {
        [ForeignKey("User")]
        public int OrderdBy { get; set; }

        public User User {get;set;}

        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public Product Product {get;set;}
        public int OrderPrice { get; set; }
    }
}