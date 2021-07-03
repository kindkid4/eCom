using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAPI.Interfaces;
using WebAPI.Models;

namespace WebAPI.Data.Repo
{
    public class OrderRepository : IOrderRepository
    {
        private readonly DataContext dc;
        public OrderRepository(DataContext dc)
        {
            this.dc = dc;
        }
        public void AddOrder(Order order)
        {
            dc.Orders.Add(order);
        }

        public void DeleteOrder(int id)
        {
            var orderTodelete = dc.Orders.Find(id);
            dc.Orders.Remove(orderTodelete);
        }


        public async Task<IEnumerable<Order>> GetOrdersAsync(int userId)
        {

            var orders = await dc.Orders.ToListAsync();
            List<Order> orderToDeliver = new List<Order>();
            foreach (Order order in orders)
            {
                if (order.OrderdBy == userId)
                {
                    orderToDeliver.Add(order);
                }
            }
            if (orderToDeliver == null)
            {
                return null;
            }
            return orderToDeliver;
        }

        public void removeFromStock(int id,int qty)
        {
            var product = dc.Products.Find(id);
            product.Stock-=qty;
        }
    }
}